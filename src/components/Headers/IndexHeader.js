/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";
// core components

function IndexHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div className="page-header clear-filter" filter-color="orange">
        <div
          className="page-header-image"
          style={{
          width:1425,
          marginLeft:5,
            marginTop:80,
            backgroundImage:
              "url(" + require("assets/img/header.png").default + ")",

          }}
          ref={pageHeader}
        ></div>
        <Container>
          {/* <div className="content-center brand">
           
            <h1 className="h1-seo">Language Frame</h1>
            <h3>Learn a Language</h3>
          </div> */}
        </Container>
      </div>
    </>
  );
}

export default IndexHeader;
