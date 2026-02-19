import { Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import config from '../../config';

const TrackingScripts = () => {
  const gaId = config.analytics.googleAnalyticsId;
  const gtmId = config.analytics.googleTagManagerId;

  if (!gaId && !gtmId) {
    return null;
  }

  if (gtmId) {
    return (
      <Fragment>
        <Helmet>
          <script>
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </script>
        </Helmet>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
      </Fragment>
    );
  }

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
      <script>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);} 
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </script>
    </Helmet>
  );
};

export default TrackingScripts;
