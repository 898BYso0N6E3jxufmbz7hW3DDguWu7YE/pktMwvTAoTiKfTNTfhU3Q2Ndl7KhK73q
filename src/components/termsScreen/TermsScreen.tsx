import React from 'react';
import styles from './TermsScreen.module.scss';

const TermsScreen: React.FC = () => {
  return (
    <>
      <div className={`${styles.container}`}>
        <div className={`${styles.contentContainer}`}>
          <div className={`flex flex-col p-6`}>
            {/* title */}
            <div id={'h1'} className="text-xl font-bold text-center mt-4">
              “TERMS AND CONDITIONS” AND “PRIVACY POLICY”
            </div>
            {/* date */}
            <div id={'h2'} className="text-end mr-8 text-sm">
              Last Updated:: 28 Feb 2024
            </div>
            {/* description */}
            <div id={'h3'} className="text-lg mt-4">
              We at FNearby want you to understand what information we collect, and how we use and share it. {"That's"}
              why we encourage you to read our ”Terms and Conditions” and “Privacy Policy”. We explain how we collect,
              use, share, retain and transfer information.
            </div>
            {/* content */}
            <div className="text-md">
              <div id={'h4'} className="mt-4">
                1. Capitalized terms, not defined elsewhere in this Agreement, shall mean as follows:
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (a) “App” or “app” means the android mobile platform owned by FNearby , including any updates thereof.
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (b) “User” or “You” or “Your” refers to a natural person who has accepted this Agreement in order to
                download and use the App.
              </div>
              <div id={'h4'} className="mt-4">
                2. Any reference to the singular includes a reference to the plural and vice versa, and any reference to
                one gender includes a reference to other gender(s), unless explicitly provided for.
              </div>
              <div id={'h4'} className="mt-4">
                3. Headings and captions are used for convenience only and not for interpretation of the Agreement.
              </div>
              <div id={'h4'} className="mt-4">
                4. You approve of and accept this Agreement by:
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (a) downloading and/or installing the App on Your device; or
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (b) accessing or using the App or any of the content available within the App from any device.
              </div>
              <div id={'h4'} className="mt-4">
                5. You can accept this Agreement only if you are of the legal age, eligibility and mental capacity to
                use the App.
              </div>
              <div id={'h4'} className="mt-4">
                6.FNearby may periodically update this ”Terms and Conditions” and “Privacy Policy”. Whenever we make any
                changes to this ”Terms and Conditions” and “Privacy Policy” that are important for you to know about, we
                will post the updated ”Terms and Conditions” and “Privacy Policy” at this link. It is your
                responsibility to keep checking this page from time to time in order to be aware of any changes made to
                this ”Terms and Conditions” and “Privacy Policy”.
              </div>
              <div id={'h4'} className="mt-4">
                7. You understand that We want You to not use the App if You do not understand, approve of or accept all
                the terms specified in this Agreement. Hence, You are requested to read these ”Terms and Conditions” and
                “Privacy Policy” carefully and understand the Agreement before You accept it and agree to be bound by
                it.
              </div>
              <div id={'h4'} className="mt-4">
                8.The App may include links to other mobile applications and/or websites.
              </div>
              <div id={'h4'} className="mt-4">
                9.In order to provide the App to You, We may request You to register and/or provide information about
                yourself. We trust that any information provided by You will always be true, accurate, complete and
                updated.
              </div>
              <div id={'h4'} className="mt-4">
                10.Your email address and phone number are used to identify you while logging into the App.
              </div>
              <div id={'h4'} className="mt-4">
                11.FNearby may use your personal information to control your access to the App as well as use of the
                App, to communicate with you, customize your experience of using the App.
              </div>
              <div id={'h4'} className="mt-4">
                12. We may stop provision of the App (or any part of the App), permanently or temporarily, to You or to
                Users generally or may modify or change the nature of the App and/or these Terms at Our sole discretion,
                without any prior notice to You.{' '}
              </div>
              <div id={'h4'} className="mt-4">
                13.You will download and install the App for using it. You will also download and update the relevant
                latest versions of the App and any relevant updates provided by Us to avail continued access to the App.
              </div>
              <div id={'h4'} className="mt-4">
                14.Google Analytics: Google Analytics is a web analysis service provided by Google Inc. (“Google”).
                Google utilizes the Data collected to track and examine the use of this app, to prepare reports on its
                activities and share them with other Google services
                <span>
                  <a href="https://www.google.com/intl/en/policies/privacy/" className="text-blue-500 hover:underline">
                    {' '}
                    Privacy Policy.
                  </a>
                </span>
              </div>
              <div id={'h4'} className="mt-4">
                15.The App may, from time to time, contain links to and from the websites of our partner networks,
                advertisers, Affiliates and/or any other websites or mobile applications. If you follow a link to any of
                these websites, please note that these websites have their own privacy policies and that we do not
                accept any responsibility or liability for these policies. Please check these policies before you submit
                any personal data to these websites or mobile applications.
              </div>
              <div id={'h4'} className="mt-4">
                16.We store your data with Amazon Web Services cloud platform provided by Amazon Web Services, Inc. and
                also on Google Cloud Platform provided by Google LLC on their servers located in India and abroad.
              </div>
              <div id={'h4'} className="mt-4">
                17.ACCOUNT CREATION:{' '}
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (a) To avail the Services, you will be required to create an account on the Platform (“Account”). For
                this Account, you may be required to furnish certain details(eg: name,email,gender and phone number). To
                create an Account, you must be at least 18 years of age.
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (b) You warrant that all information furnished in connection with your Account is and shall remain
                accurate and true. You agree to prompt update your details on the Platform in the event of any change to
                or modification of this information.
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (c) You are solely responsible for maintaining the security and confidentiality of your Account and
                agree to immediately notify us of a disclosure or unauthorized use of your Account or any other breach
                of security with respect to your Account(never share your credentials and passwords to anyone).
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (d) You are liable and accountable for all activities that take place through your Account, including
                activities performed by persons other than you.
              </div>

              <div id={'h4'} className="mt-4">
                18.We collect your phone number and request access to the SMSes on your phone by sending you a
                One-Time-Password (“OTP”), which you confirm by entering the OTP to confirm your identity, while
                registering with our Platform.
              </div>
              <div id={'h4'} className="mt-4">
                19.FNearby collects personal data:{' '}
              </div>
              <div id={'h4'} className="mt-4">
                <div id={'h5'} className="mt-1 ml-6">
                  (a)provided by users to FNearby, such as during account creation
                </div>
                <div id={'h5'} className="mt-1 ml-6">
                  (b)created during use of our services, such as location, app usage, and device data
                </div>
                <div id={'h5'} className="mt-1 ml-6">
                  (c)For more information, please see the section titled “20.How we use personal data.”
                </div>
                <div id={'h5'} className="mt-1 ml-6">
                  (d)Data provided by users. This includes:
                </div>
                <div id={'h6'} className="mt-1 ml-16">
                  (1)We collect data when users create or update their FNearby accounts. This may include their name,
                  email, phone number, login name and password, address, profile picture, payment ,emergency contact
                  information and user settings.
                </div>
                <div id={'h6'} className="mt-1 ml-16">
                  (2)This also includes gender and/or occupation.
                </div>
                <div id={'h6'} className="mt-1 ml-16">
                  (3)We may use the photos submitted by users to verify their identities.
                </div>

                <div id={'h5'} className="mt-1 ml-6">
                  (e)Data created during use of our services. This includes:
                </div>
                <div id={'h6'} className="mt-1 ml-16">
                  (1) Location data of users: We collect {'user’s'} precise or approximate location data in multiple
                  screens of the app to give best services,to enable tracking and safety features,and to prevent and
                  detect fraud. FNearby collects this data when the FNearby app is running in the foreground (app open
                  and on-screen) or background (app open but not on-screen) of their mobile device.
                </div>
              </div>
              <div id={'h4'} className="mt-4">
                20.How we use personal data
              </div>
              <div id={'h5'} className="mt-1 ml-6">
                (a) FNearby uses personal data to enable reliable and convenient services. We also use such data:
              </div>
              <div id={'h6'} className="mt-1 ml-16">
                (1)to enhance the safety and security of our users and services
              </div>
              <div id={'h6'} className="mt-1 ml-16">
                (2)for customer support
              </div>
              <div id={'h6'} className="mt-1 ml-16">
                (3)for research and development
              </div>
              <div id={'h6'} className="mt-1 ml-16">
                (4)to enable communications between users{' '}
              </div>
            </div>
            {/* end */}
            <div id={'h4'} className="text-center">
              {'----------------end----------------'}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsScreen;
