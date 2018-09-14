# AutoLightbox
jQuery Plugin to automatically make image lightbox to show image with caption. You have to do nothing to set tags or classes for each image.

<h2> Why Auto Lightbox</h2>
   <p>This lightweight plugin will automatically do everything for creating a simple (but not simpler) image light box to show image with caption. You have to do nothing to set tags or classes for each image. Just call: <br />
   <pre class="prettyprint lang-js">
     AutoLightbox();  </pre>
in your jQuery code, with the selector whose images to be shown in light box. 
</p>
<p>For example, if you want to show your article images, the statement will be:
   <pre class="prettyprint lang-js">
   $("article").AutoLightbox(); </pre>
Then your article must have some images, i.e: </p>
   <pre class="prettyprint lang-xml">
  &lt;article&gt
    ......some text.....
   &lt;img src="/img/image-name.jpg" alt="your photo caption" />
    ......some text.....
   &lt;img src="/img/image-name.jpg" />
    ......some text.....
   &lt;img src="/img/image-name.jpg" />
  &lt;/article&gt </pre>

<h2>What's Happen Next </h2>
<p> When you click on the image, this plugin will clone it and show in the light box.
It will auto create the lightbox container, a close button, caption bar, dim over layer (optional) and some CSS styles to look awesome.  It will also automatically detect caption (from alt text), for each image. </p>

<p><strong> <i> No need any extra HTML tag, CSS code or icon </i></strong> as it is created with the aim to keep you in rest. <br />
Try it, test it and don't forget to Star it on GitHub .
<br />
<br />
<h2>Advance Implementation:</h2>
<p> By default, "Auto Lightbox" is responsive, however, if you want to change its width or height you can update its settings in jQuery code, just like below: <br /> </p>
   <pre class="prettyprint lang-js">
   $("article").AutoLightbox({
         width: 320,
         height: 240
    });  </pre> 
<p> By default, dim background effect is on, if you want to turn it off, the statement is:</p>
   <pre class="prettyprint lang-js">
   $("article").AutoLightbox({
       dimBackground: false

   }); </pre>

<h2> Author </h2>
  <p> A project by Asif Mughal - <a href="https://www.codehim.com/2018/09/jquery-auto-lightbox-plugin.html" target="_blank"> AutoLightbox jQuery Plugin</a> <br />
   Visit my homepage to download or <a href="https://www.codehim.com" target="_blank" rel="dofollow"> browse awesome web projects and tutorials</a>.
