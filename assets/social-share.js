const socialShare = () => {
  const currentPageLink = encode(window.location.href);
  const message = encodeURIComponent('Hey, I have this campaign');
  const title = encodeURIComponent(document.querySelector('sc-social-title'));

  console.log([currentPageLink, message, title]);
}

document.addEventListener('DOMContentLoaded', socialShare);