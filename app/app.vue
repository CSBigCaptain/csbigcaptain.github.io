<template>
  <NuxtPage />
</template>

<script setup lang="ts">
// 注入 Microsoft Clarity 代码
const config = useRuntimeConfig()
const analyticsId = config.public.msAnalyticsId

useHead({
  script: [
    {
      innerHTML: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "${analyticsId}");
      `,
      type: 'text/javascript',
    },
    {
      innerHTML: `
        (function(d) {
          var config = {
            kitId: 'wih3lxc',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);`,
      type: 'text/javascript',
    },
  ],
})

getPagesTheme()
</script>
