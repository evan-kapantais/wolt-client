import React from "react";

const LrgIndex = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <LargeBanner />
      <main id="main-content">
        <section>
          <div id="center-container">
            {topics.map((topic, i) => (
              <Topic key={i} topic={topic} />
            ))}
          </div>
        </section>
      </main>
      {imageSource && (
        <ImageOverlay source={imageSource} setSource={setImageSource} />
      )}
      <Menu
        topics={topics}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </Layout>
  );
};

export default LrgIndex;
