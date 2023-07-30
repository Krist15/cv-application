import twitterLogo from '../assets/twitter.svg';
import facebookLogo from '../assets/facebook.svg';
import instagramLogo from '../assets/instagram.svg';

export default function SocialMedia() {
  return (
    <div className="flex gap-4 p-8 justify-between">
      <img
        src={twitterLogo}
        alt="twitter logo"
        className="w-10"
      />
      <img
        src={instagramLogo}
        alt="twitter logo"
        className="w-10"
      />
      <img
        src={facebookLogo}
        alt="twitter logo"
        className="w-10"
      />
    </div>
  );
}
