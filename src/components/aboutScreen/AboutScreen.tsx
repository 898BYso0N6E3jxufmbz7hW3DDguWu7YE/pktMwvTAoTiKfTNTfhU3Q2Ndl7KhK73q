import React from 'react';
import styles from './AboutScreen.module.scss';

const AboutScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`${styles.cardContainer}`}>
            <div className={`${styles.text1}`}>
              <div>Welcome to FNearby</div>
              <div>FNearby is a platform where users can give or get a service. </div>
              <div> For giving or getting a service the user must register in the app.</div>
              <div>Users can search for nearby services.</div>
            </div>
            <div className={`${styles.text2}`}>Eg:: Restaurants and hotels.</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutScreen;
