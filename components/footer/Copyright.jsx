import { dsnCN } from "../../hooks/helper";

function Copyright({ className, ...restProps }) {
  return (
    <h5 className={dsnCN(className)} {...restProps}>
      {new Date().getFullYear()} © Made with <span className="love">♥</span>by
      <a
        className="link-hover"
        data-hover-text="GenSoft."
        target="_blank"
        rel="nofollow"
        href="https://www.facebook.com/mygensoft/"
      >
        GenSoft.
      </a>
    </h5>
  );
}

export default Copyright;
