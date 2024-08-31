import { dsnCN } from "../../hooks/helper";

function Copyright({ className, ...restProps }) {
  return (
    <h5 className={dsnCN(className)} {...restProps}>
      {new Date().getFullYear()} Copyright ©{" "}
      <span style={{ color: "#8b6948" }}>ESAR Paper Industries Ltd</span>
      <br />
      <br />
      Developed by{" "}
      <a
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
