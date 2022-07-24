import * as ReactShare from "react-share";

const config = {
  size: 60,
};

type Props = {
  id: string;
  title: string;
  size?: number;
  via?: string;
  hashtag?: string[];
};

export const SocialShare = (props: Props) => {
  const title = `${props.title}`;
  const url = `https://a-release.com/article/${props.id}`;
  return (
    <div className="mx-auto grid w-full grid-cols-3 gap-8 rounded-xl bg-white py-10 px-20 shadow-md md:max-w-[740px]">
      <div className="col-span-3">
        <p className="text-lg font-semibold">- 記事をシェアする -</p>
      </div>

      <div>
        <ReactShare.FacebookShareButton url={url} quote={title}>
          <ReactShare.FacebookIcon size={props.size ?? config.size} round />
        </ReactShare.FacebookShareButton>
      </div>

      <div>
        <ReactShare.TwitterShareButton
          url={url}
          title={title}
          hashtags={props.hashtag}
        >
          <ReactShare.TwitterIcon size={props.size ?? config.size} round />
        </ReactShare.TwitterShareButton>
      </div>
      <div>
        <ReactShare.LineShareButton url={url} title={title}>
          <ReactShare.LineIcon size={props.size ?? config.size} round />
        </ReactShare.LineShareButton>
      </div>
    </div>
  );
};
