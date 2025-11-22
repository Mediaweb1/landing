const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30 animate-mesh"></div>
      <div className="absolute inset-0 bg-gradient-hero"></div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Content */}
      <div className="relative z-10">
        <section className="px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Privacy{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Policy
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Your privacy matters to us. Here's how we protect and use your
                data.
              </p>
              <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2">
                <span className="text-sm text-gray-400">
                  Effective Date: February 3, 2025
                </span>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    1
                  </span>
                  Information We Collect
                </h2>
                <p className="text-gray-300 leading-7 mb-6">
                  We collect personal information that you provide to us when
                  you register on the platform, use our services, or otherwise
                  interact with us. This includes:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">
                        Personal Information:
                      </strong>{" "}
                      Name, email address, social media account access tokens
                      with certain permissions which the user has consented to.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      <strong className="text-white">Usage Data:</strong>{" "}
                      Analytics data about your interactions on social media
                      platforms (likes, comments, followers, etc).
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    2
                  </span>
                  User Consent and Profile Building
                </h2>
                <p className="text-gray-300 leading-7 mb-6">
                  We obtain valid user consent before building or augmenting user profiles. By using our service, you explicitly consent to:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      The collection and processing of your social media data for analytics and insights purposes.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      The creation of user profiles based on your social media activity and engagement metrics.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      The storage and analysis of your data to provide personalized insights and recommendations.
                    </span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-7 mt-6">
                  You may withdraw your consent at any time by disconnecting your social media accounts or deleting your account entirely.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    3
                  </span>
                  How We Use Your Information
                </h2>
                <p className="text-gray-300 leading-7 mb-6">
                  We use personal information collected via our services for a
                  variety of business purposes, including:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      To facilitate account creation and login process.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      To manage user accounts and provide you with our services.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      To analyze social media data to provide insights and
                      analytics.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      To fulfill and manage your orders, payments, and other
                      transactions.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    4
                  </span>
                  Sharing Your Information
                </h2>
                <p className="text-gray-300 leading-7 mb-6">
                  We do not share your personal information with third parties
                  except in the following cases:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>With your consent.</span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      For legal reasons, such as complying with applicable laws,
                      regulations, or legal processes.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      With service providers who perform services on our behalf.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    5
                  </span>
                  Data Security
                </h2>
                <p className="text-gray-300 leading-7">
                  We implement appropriate technical and organizational security
                  measures designed to protect your personal information.
                  However, please also remember that we cannot guarantee that
                  the internet itself is 100% secure. We comply with all applicable laws and regulations regarding data security and incident reporting.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    6
                  </span>
                  Data Retention
                </h2>
                <p className="text-gray-300 leading-7">
                  We retain personal information for as long as necessary to
                  fulfill the purposes outlined in this privacy notice unless
                  otherwise required by law.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    7
                  </span>
                  Your Rights and Data Subject Requests
                </h2>
                <div className="space-y-6">
                  <p className="text-gray-300 leading-7">
                    You have the right to request the deletion of your personal
                    data that we hold. If you wish to request the deletion of
                    your personal data, it can be done in the dashboard or by
                    contacting us using the contact information provided on the
                    "Contact Us" page.
                  </p>
                  <p className="text-gray-300 leading-7">
                    Upon receipt of a verified request to delete your personal
                    data, we will do so unless required to retain the
                    information by law or for legitimate business purposes. We
                    will inform you if we cannot fulfill your request for any
                    reason. Please note that even after your data is deleted,
                    some anonymized data may remain in our records, which is not
                    personally identifiable.
                  </p>
                  <p className="text-gray-300 leading-7">
                    We will promptly communicate any data subject rights requests to relevant parties as required by applicable laws and platform policies.
                  </p>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    8
                  </span>
                  Changes to the Privacy Policy
                </h2>
                <p className="text-gray-300 leading-7">
                  We may modify these terms at any time. We will notify you of
                  any changes by posting the new terms on our website. Continued
                  use of the service after any changes shall constitute your
                  consent to such changes.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Questions About This Policy?
                </h3>
                <p className="text-gray-300 mb-6">
                  If you have any questions about this Privacy Policy, please
                  contact us through our support channels.
                </p>
                <div className="flex items-center justify-center space-x-2 text-primary">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <span className="text-sm">
                    We're here to help protect your privacy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
