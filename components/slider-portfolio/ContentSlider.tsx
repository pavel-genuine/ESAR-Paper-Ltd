import MetaPost from "../meta/MetaPost";
import { dsnCN } from "../../hooks/helper";
import { getPortfolioLink } from "../../data/portfolio";
import Button from "../button/Button";
import { forwardRef } from "react";
import DsnLink from "../../hooks/DsnLink";
import HeroButton from "../button/HeroButton";

function ContentSlider(
  {
    data,
    activeClass,
    className,
    hasSeparator,
    hasCategory = true,
    hasDescription = true,
    separateCat = ", ",
    ...restProps
  },
  ref
) {
  return (
    <div
      className={dsnCN(
        "dsn-slider-content hero-content dsn-container d-flex",
        className
      )}
      {...restProps}
    >
      {data.map((item, key) => (
        <div
          className={`slide-content mb-80 ${
            activeClass === key ? "dsn-active" : ""
          }`}
          key={key}
          data-dsn-id={key}
          ref={ref}
        >
          {
            <HeroButton
              className={"link-custom hero-logo-mobile"}
              {...item.href}
            >
              {item.buttonText}
            </HeroButton>
          }
          {item.subtitle && (
            <p className="description max-w570 mb-15">{item.subtitle}</p>
          )}
          {item.category && hasCategory && (
            <MetaPost category={item.category} separate={separateCat} />
          )}

          <h1 className="title">
            {item.slug ? (
              <DsnLink
                href={getPortfolioLink(item)}
                dangerouslySetInnerHTML={{ __html: item.title }}
                transitionPage={{ title: item.title }}
              />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: item.title }} />
            )}
          </h1>
          {hasSeparator && hasDescription && <hr className="mt-20" />}
          {item.description && hasDescription && (
            <div className="max-w570 mt-20 description">{item.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}

export default forwardRef(ContentSlider);
