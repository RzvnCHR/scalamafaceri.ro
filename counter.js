<!DOCTYPE html>
<html lang="ro">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>CZA Automobile</title>

<style>

/* =========================================
   VARIABLES
   ========================================= */

:root{
  --gold:#d4af37;
  --gold-light:#f5e6a8;
  --gold-dark:#8a6d1f;

  --silver:#c9ccd1;
  --silver-light:#f2f3f5;

  --bg:#060606;
}


/* =========================================
   RESET
   ========================================= */

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html,
body{
  width:100%;
  height:100%;
  background:var(--bg);
  overflow:hidden;
}


/* =========================================
   BODY
   ========================================= */

body{
  font-family:'Georgia','Times New Roman',serif;

  display:flex;
  align-items:center;
  justify-content:center;

  position:relative;
}


/* =========================================
   PARTICLES.JS
   ========================================= */

#particles-js{
  position:fixed !important;

  inset:0 !important;

  width:100% !important;
  height:100% !important;

  z-index:1 !important;

  pointer-events:none !important;
}

#particles-js canvas{
  position:absolute !important;

  inset:0 !important;

  width:100% !important;
  height:100% !important;
}


/* =========================================
   ORIGINAL GLOW
   ========================================= */

.glow{
  position:fixed;

  inset:0;

  background:

    radial-gradient(
      ellipse 60% 45% at 50% 45%,
      rgba(212,175,55,0.10),
      transparent 70%
    ),

    radial-gradient(
      ellipse 120% 100% at 50% 50%,
      rgba(0,0,0,0) 0%,
      rgba(0,0,0,0.75) 100%
    );

  pointer-events:none;

  z-index:2;
}


/* =========================================
   MAIN STAGE
   ========================================= */

.stage{
  position:relative;

  z-index:5;

  display:flex;

  flex-direction:column;

  align-items:center;

  text-align:center;

  padding:40px 24px;

  max-width:90vw;
}


/* =========================================
   TAGLINE
   ========================================= */

.tagline{
  font-family:'Helvetica Neue',Arial,sans-serif;

  font-size:clamp(11px,1.6vw,15px);

  letter-spacing:0.45em;

  text-transform:uppercase;

  font-weight:400;

  margin-bottom:28px;

  background:

    linear-gradient(
      180deg,
      var(--silver-light) 0%,
      var(--silver) 50%,
      var(--gold-light) 100%
    );

  -webkit-background-clip:text;

  background-clip:text;

  color:transparent;

  opacity:0;

  animation:
    fadeDown 1.4s ease forwards 0.3s;
}


/* =========================================
   SCALAM LOGO
   ========================================= */

.my-logo{
  height:clamp(32px,4.5vw,52px);

  width:auto;

  margin-bottom:15px;

  opacity:0;

  filter:
    drop-shadow(
      0 0 14px rgba(212,175,55,0.25)
    );

  animation:
    fadeIn 1.4s ease forwards 0.7s;
}


/* =========================================
   DIVIDER
   ========================================= */

.divider{
  width:1px;

  height:44px;

  background:

    linear-gradient(
      180deg,
      transparent,
      var(--gold),
      transparent
    );

  margin-bottom:36px;

  opacity:0;

  animation:
    fadeIn 1.4s ease forwards 1s;
}


/* =========================================
   CLIENT LOGO
   ========================================= */

.client-logo{
  height:clamp(90px,14vw,170px);

  width:auto;

  margin-bottom:34px;

  opacity:0;

  filter:
    drop-shadow(
      0 0 30px rgba(212,175,55,0.18)
    );

  animation:
    fadeInUp 1.6s ease forwards 1.2s;
}


/* =========================================
   SITE NAME
   ========================================= */

.site-name{
  font-family:'Helvetica Neue',Arial,sans-serif;

  font-size:clamp(20px,3.4vw,34px);

  letter-spacing:0.18em;

  font-weight:600;

  text-transform:uppercase;

  margin-bottom:15px;

  background:

    linear-gradient(
      180deg,
      #ffffff 0%,
      var(--silver-light) 35%,
      var(--silver) 60%,
      #ffffff 100%
    );

  -webkit-background-clip:text;

  background-clip:text;

  color:transparent;

  text-shadow:
    0 0 30px rgba(255,255,255,0.08);

  opacity:0;

  animation:
    fadeInUp 1.6s ease forwards 1.6s;
}


/* =========================================
   PHONE
   ========================================= */

.site-phone{
  font-family:'Helvetica Neue',Arial,sans-serif;

  font-size:clamp(13px,2vw,20px);

  letter-spacing:0.18em;

  font-weight:600;

  text-transform:uppercase;

  margin-bottom:15px;

  background:

    linear-gradient(
      180deg,
      #ffffff 0%,
      var(--silver-light) 35%,
      var(--silver) 60%,
      #ffffff 100%
    );

  -webkit-background-clip:text;

  background-clip:text;

  color:transparent;

  text-shadow:
    0 0 30px rgba(255,255,255,0.08);

  opacity:0;

  animation:
    fadeInUp 1.6s ease forwards 1.8s;
}


/* =========================================
   STATUS
   ========================================= */

.status{
  position:relative;

  display:inline-flex;

  align-items:center;

  gap:12px;

  font-family:'Helvetica Neue',Arial,sans-serif;

  font-size:clamp(11px,1.8vw,14px);

  letter-spacing:0.35em;

  text-transform:uppercase;

  font-weight:300;

  color:var(--gold-light);

  opacity:0;

  animation:
    fadeInUp 1.6s ease forwards 2s;
}

.status::before,
.status::after{
  content:"";

  width:26px;

  height:1px;

  background:

    linear-gradient(
      90deg,
      transparent,
      var(--gold)
    );
}

.status::after{

  background:

    linear-gradient(
      90deg,
      var(--gold),
      transparent
    );
}

.status .dot{
  width:6px;

  height:6px;

  border-radius:50%;

  background:var(--gold);

  box-shadow:
    0 0 8px 2px rgba(212,175,55,0.6);

  animation:
    pulse 1.8s ease-in-out infinite;
}


/* =========================================
   CTA
   ========================================= */

.cta-wrap{
  margin-top:40px;

  opacity:0;

  animation:
    fadeInUp 1.6s ease forwards 2.3s;
}

.cta{
  position:relative;

  display:inline-flex;

  align-items:center;

  gap:14px;

  padding:16px 40px;

  font-family:'Helvetica Neue',Arial,sans-serif;

  font-size:clamp(11px,1.6vw,13px);

  letter-spacing:0.28em;

  text-transform:uppercase;

  font-weight:600;

  text-decoration:none;

  color:#0a0a0a;

  background:

    linear-gradient(
      135deg,
      var(--gold-dark) 0%,
      var(--gold) 25%,
      var(--gold-light) 50%,
      var(--gold) 75%,
      var(--gold-dark) 100%
    );

  background-size:250% 250%;

  border-radius:2px;

  overflow:hidden;

  isolation:isolate;

  transition:

    transform 0.45s cubic-bezier(.2,.9,.3,1),

    box-shadow 0.45s ease,

    background-position 1.2s ease;

  box-shadow:

    0 0 0 1px rgba(212,175,55,0.5),

    0 8px 24px -8px rgba(212,175,55,0.35),

    inset 0 1px 0 rgba(255,255,255,0.4);

  background-position:0% 50%;
}

.cta::before{
  content:"";

  position:absolute;

  inset:0;

  z-index:-1;

  background:

    linear-gradient(
      115deg,
      transparent 30%,
      rgba(255,255,255,0.75) 48%,
      rgba(255,255,255,0.75) 52%,
      transparent 70%
    );

  transform:translateX(-140%);

  transition:
    transform 0.9s ease;
}

.cta .arrow{
  display:inline-block;

  transition:
    transform 0.4s cubic-bezier(.2,.9,.3,1);

  font-size:14px;

  line-height:1;
}

.cta:hover{
  transform:translateY(-3px);

  background-position:100% 50%;

  box-shadow:

    0 0 0 1px rgba(245,230,168,0.8),

    0 14px 34px -8px rgba(212,175,55,0.55),

    inset 0 1px 0 rgba(255,255,255,0.55);
}

.cta:hover::before{
  transform:translateX(140%);
}

.cta:hover .arrow{
  transform:translateX(5px);
}

.cta:focus-visible{
  outline:2px solid var(--gold-light);

  outline-offset:4px;
}

.cta:active{
  transform:
    translateY(-1px)
    scale(0.98);
}


/* =========================================
   FOOTER
   ========================================= */

footer.brand-credit{
  position:fixed;

  bottom:22px;

  left:0;

  right:0;

  text-align:center;

  z-index:5;

  font-family:'Helvetica Neue',Arial,sans-serif;

  font-size:10px;

  letter-spacing:0.3em;

  text-transform:uppercase;

  color:rgba(201,204,209,0.35);

  opacity:0;

  animation:
    fadeIn 1.6s ease forwards 2.4s;
}

.brand-credit a{
  color:inherit !important;

  text-decoration:none !important;

  cursor:pointer;
}


/* =========================================
   ANIMATIONS
   ========================================= */

@keyframes fadeIn{

  from{
    opacity:0;
  }

  to{
    opacity:1;
  }

}

@keyframes fadeDown{

  from{
    opacity:0;

    transform:
      translateY(-10px);
  }

  to{
    opacity:1;

    transform:
      translateY(0);
  }

}

@keyframes fadeInUp{

  from{
    opacity:0;

    transform:
      translateY(14px);
  }

  to{
    opacity:1;

    transform:
      translateY(0);
  }

}

@keyframes pulse{

  0%,
  100%{
    opacity:1;

    transform:
      scale(1);
  }

  50%{
    opacity:0.4;

    transform:
      scale(0.75);
  }

}


/* =========================================
   MOBILE
   ========================================= */

@media (max-width:600px){

  html,
  body{
    width:100%;
    height:100%;

    overflow:hidden;
  }

  .stage{
    width:100%;

    max-width:100%;

    padding:18px 14px;
  }

  .tagline{
    font-size:9px;

    letter-spacing:0.28em;

    margin-bottom:16px;

    white-space:nowrap;
  }

  .my-logo{
    height:32px;

    margin-bottom:15px;
  }

  .divider{
    height:26px;

    margin-bottom:20px;
  }

  .client-logo{
    height:78px;

    max-width:82vw;

    object-fit:contain;

    margin-bottom:18px;
  }

  .site-name{
    font-size:19px;

    letter-spacing:0.10em;

    margin-bottom:15px;

    white-space:nowrap;
  }

  .site-phone{
    font-size:13px;

    letter-spacing:0.14em;

    margin-bottom:15px;

    white-space:nowrap;
  }

  .status{
    font-size:8px;

    letter-spacing:0.18em;

    gap:7px;

    white-space:nowrap;
  }

  .status::before,
  .status::after{
    width:16px;
  }

  .status .dot{
    width:4px;

    height:4px;
  }

  .cta-wrap{
    margin-top:22px;
  }

  .cta{
    padding:12px 22px;

    font-size:9px;

    letter-spacing:0.18em;

    gap:8px;

    white-space:nowrap;
  }

  .cta .arrow{
    font-size:12px;
  }

  footer.brand-credit{
    bottom:10px;

    font-size:8px;

    letter-spacing:0.20em;
  }

}


/* =========================================
   VERY SMALL PHONES
   ========================================= */

@media (max-height:700px) and (max-width:600px){

  .stage{
    padding-top:10px;
    padding-bottom:10px;
  }

  .tagline{
    margin-bottom:10px;
  }

  .my-logo{
    height:28px;

    margin-bottom:15px;
  }

  .divider{
    height:20px;

    margin-bottom:14px;
  }

  .client-logo{
    height:65px;

    margin-bottom:12px;
  }

  .site-name{
    font-size:17px;

    margin-bottom:15px;
  }

  .site-phone{
    font-size:12px;

    margin-bottom:15px;
  }

  .cta-wrap{
    margin-top:16px;
  }

}


/* =========================================
   REDUCED MOTION
   ========================================= */

@media (prefers-reduced-motion:reduce){

  #particles-js{
    display:none !important;
  }

  .status .dot{
    animation:none;
  }

  *{
    animation-duration:0.01ms !important;
  }

}

</style>

</head>


<body>


<!-- =========================================
     PARTICLES.JS
     ========================================= -->

<div id="particles-js"></div>


<!-- =========================================
     ORIGINAL GLOW
     ========================================= -->

<div class="glow"></div>


<!-- =========================================
     MAIN CONTENT
     ========================================= -->

<main class="stage">


  <!-- TAGLINE -->

  <div class="tagline">
    From the Best, For the Best.
  </div>


  <!-- SCALAM LOGO -->

  <a
    href="https://www.scalamafaceri.ro/"
    target="_blank"
    rel="noopener"
  >

    <img
      class="my-logo"
      src="logo-scalam.png"
      alt="SCALAMAFACERI.RO"
    >

  </a>


  <!-- DIVIDER -->

  <div class="divider"></div>


  <!-- CZA LOGO -->

  <img
    class="client-logo"
    src="cza-logo.png"
    alt="CZA Automobile"
  >


  <!-- WEBSITE -->

  <div class="site-name">
    CZAAUTOMOBILE.RO
  </div>


  <!-- PHONE -->

  <div class="site-phone">
    0727 982 772
  </div>


  <!-- STATUS -->

  <div class="status">

    <span class="dot"></span>

    <span>
      Website în lucru
    </span>

  </div>


  <!-- CTA -->

  <div class="cta-wrap">

    <a
      class="cta"
      href="https://czaautomobile.autovit.ro/inventory"
      target="_blank"
      rel="noopener"
    >

      Vezi catalog Autovit

      <span class="arrow">
        →
      </span>

    </a>

  </div>


</main>


<!-- =========================================
     FOOTER
     ========================================= -->

<footer class="brand-credit">

  <a
    href="https://www.scalamafaceri.ro/"
    target="_blank"
    rel="noopener"
  >
    SCALAMAFACERI.RO
  </a>

</footer>


<!-- =========================================
     PARTICLES.JS LIBRARY
     ========================================= -->

<script src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"></script>


<!-- =========================================
     PARTICLES CONFIG
     ========================================= -->

<script>

particlesJS(
  "particles-js",
  {

    "particles":{

      "number":{

        "value":35,

        "density":{

          "enable":true,

          "value_area":1000

        }

      },


      "color":{

        "value":"#d4af37"

      },


      "shape":{

        "type":"circle"

      },


      "opacity":{

        "value":0.18,

        "random":true,

        "anim":{

          "enable":true,

          "speed":0.5,

          "opacity_min":0.03,

          "sync":false

        }

      },


      "size":{

        "value":2,

        "random":true,

        "anim":{

          "enable":true,

          "speed":1,

          "size_min":0.5,

          "sync":false

        }

      },


      "line_linked":{

        "enable":false

      },


      "move":{

        "enable":true,

        "speed":0.25,

        "direction":"none",

        "random":true,

        "straight":false,

        "out_mode":"out",

        "bounce":false

      }

    },


    "interactivity":{

      "detect_on":"canvas",

      "events":{

        "onhover":{

          "enable":false

        },

        "onclick":{

          "enable":false

        },

        "resize":true

      }

    },


    "retina_detect":true

  }
);

</script>


</body>
</html>
