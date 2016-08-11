---
title: Hosting Static websites with AWS
author:  Matt Dodge
posted: 20160323
summary:
  Procedure for setting up brunch, Jenkins, and AWS to host your static sites in a reliable and secure fashion.
_options:
  layout: app/layouts/blog.static.hbs
---

Brunch makes it easy to build a static web site, but eventually it comes time to share that site with the world. This guide details steps to make that happen using our AWS stack. By following this guide, you will end up with a site that is served up with https, highly available around the world, and built automatically. And you'll be done in less than 15 minutes. Not bad, eh?

## Hosting - Amazon S3

1. Go to the AWS console and select the S3 service - or just [click here](https://console.aws.amazon.com/s3/home)
2. Create a new bucket - This bucket should be the subdomain that you wish to eventually access the site from. For example, `design.n.io`. You can read more about standard bucket naming rules [here](http://docs.aws.amazon.com/AmazonS3/latest/dev/BucketRestrictions.html) but for the most part if your bucket looks like a domain name, you should be good.
3. Enable static website hosting for the bucket - The configuration panel for the newly created bucket has a section for "Static Website Hosting". Click "Enable website hosting" and enter your index document (probably `index.html`).
4. Enable everyone to see the bucket - By default, S3 buckets are only viewable to users that have authenticated with AWS. This is not very useful for a public website. In the "Permissions" section of the bucket config, click "Add Bucket Policy" and paste this snippet in for the policy. Be sure to replace `design.n.io` with your bucket name.
```
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "Allow Public Access to All Objects",
			"Effect": "Allow",
			"Principal": "*",
			"Action": "s3:GetObject",
			"Resource": "arn:aws:s3:::design.n.io/*"
		}
	]
}
```




## Jenkins - Automatic building using brunch

1. Go to [Jenkins](http://jenkins.nioinstances.com:8081/) and create a new Freestyle job for this static site. You may need an administrator to create a job for you.
2. Enable source code management - Select "Git" as the SCM, then enter your repository URL, credentials, and branch to build. You will likely want to use the `neutralioJenkins` credentials that are already loaded in to Jenkins. Here is a screenshot of how this design blog is built - when changes to the `design-blog` branch happen, Jenkins will trigger a build.

    ![Jenkins screenshot](/images/build-static-sites/jenkins_screenshot.png)
3. Set up source code polling as a build trigger - In "Build Triggers", select "Poll SCM" and enter the following value for the schedule. I do not know why you have to do this, but you do for some reason.
```
H */3 * * *
```

4. Add your build step - Add a build step to execute a shell. You can run any shell commands you want in here, but you likely want to use brunch to build your app for production.
```
npm install
brunch build --production
```

5. Publish your build to S3 - Add a post-build action to publish build artifacts to an S3 bucket. The source files to copy is probably going to be the `public` folder that brunch creates, you can select that folder by entering this for "Source" `public/**/*`. Your destination bucket is the name of the bucket you created earlier. e.g. `design.n.io`. The bucket region should be set to `us-east-1`.

6. Save your project and build your job.

At this point, if the build succeeds, your built files should have been uploaded to S3 and should be visible through your S3 bucket URL. You can find this URL under the "Static Website Hosting" section of your S3 bucket config.


## https - Security first

We of course want our new site to be available via https. Unfortunately, S3 does not support this, but fortunately, AWS CloudFront does! We will use CloudFront to make our site load quickly for users all around the world, and also serve up TLS certs.

### Create the certificate

1. Go to [AWS Certificate Manager](https://console.aws.amazon.com/acm/home?region=us-east-1#/).
2. Request a new certificate for the subdomain you wish to have the site accessible on.
3. A verification email will go out to the technical contact on the domain. Check with Matt for this, probably.
4. Once the certificate is verified, move on to creating the CloudFront distribution.

### Create the CloudFront distribution

1. Go to [AWS CloudFront](https://console.aws.amazon.com/cloudfront/home?region=us-east-1).
2. Create a new web distribution for your site.
3. For Origin Domain Name, you can select your S3 bucket for the simple approach. The problem with this approach is that any subdirectories will not be able to auto-detect an `index.html` page. So you would have to access subdirectory roots like the following `https://design.n.io/blog/index.html` instead of just `https://design.n.io/blog`. Note that this only applies for subdirectories, not the root of your bucket. If you don't have subdirectories to deal with, selecting the bucket is the easiest approach. If you do have subdirectories you want to work, instead of selecting your bucket, enter your bucket's URL instead. So `design.n.io.s3-website-us-east-1.amazonaws.com` instead of `design.n.io.s3.amazonaws.com`. See [this thread](http://stackoverflow.com/questions/31017105/how-do-you-set-a-default-root-object-for-subdirectories-for-a-statically-hosted) for more details about this.
4. Since we are using S3, we want our origin protocol to be HTTP only. Don't worry, our CF distribution will still be available behind https.
5. For the viewer protocol policy, have it "Redirect HTTP to HTTPS"
6. Fill out the rest of the distribution settings as you see fit, it is likely the defaults are sufficient though.
7. Add your subdomain as an "Alternate Domain Name (CNAME)".
8. For SSL certificate, select "Custom SSL Certificate" and select the verified certificate from the AWS Certificate Manager.
9. Fill out any other settings and click Create Distribution

The distribution takes some time to deploy and become available, but once it's done, you should see a cloudfront URL on your distribution from the CloudFront dashboard.


## Setting up your subdomain

So now you have a CloudFront URL that you can see your site at, and it even redirects http to https! Let's make that URL a little bit prettier. Along the way you've been assuming that the site will be available at a custom subdomain. This is the subdomain you used when naming your S3 bucket, creating your TLS certificate, and added as a CNAME to your CloudFront distribution. 

To make it work, go to the web host or registrar where the root domain is registered and add a CNAME record that points to your CloudFront domain name.

If you're using SiteGround, that CNAME will look something like this:
    ![Siteground screenshot](/images/build-static-sites/siteground_screenshot.png)
