const TermsOfService = () => {
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

      <div className="relative z-10">
        <section className="px-6 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Terms of{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Service
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Please read these terms carefully before using our service.
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
                  Acceptance of Terms
                </h2>
                <p className="text-gray-300 leading-7">
                  By accessing or using our service, you agree to be bound by
                  these Terms of Service and our Privacy Policy. If you do not
                  agree to these terms, do not use our service.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    2
                  </span>
                  Description of Service
                </h2>
                <p className="text-gray-300 leading-7">
                  Mediaweb provides a platform for building portfolios with
                  integrated social media analytics. Users can link their social
                  media accounts to analyze and display their engagement
                  metrics.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    3
                  </span>
                  User Responsibilities and Prohibited Practices
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Users must provide accurate and complete information when
                      creating an account.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Users are responsible for maintaining the confidentiality
                      of their account and password.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Users must not use the service for any illegal or
                      unauthorized purpose.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Users must not host, promote, or facilitate the distribution of malicious software or code.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Users must not manage their accounts with inauthentic accounts or engage in deceptive practices.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Users must comply with all applicable transparency requirements and platform policies.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    4
                  </span>
                  Data Storage and Usage
                </h2>
                <p className="text-gray-300 leading-7">
                  Users agree that Mediaweb can store and use their social media
                  data to provide analytics services. Users must grant access to
                  their social media accounts for data retrieval.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    5
                  </span>
                  Quality Controls and User Experience
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      We maintain high-quality user experiences through continuous monitoring and improvement of our services.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Our platform adheres to content and functional requirements that ensure positive user experiences.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      We implement quality controls to prevent misuse and ensure the integrity of our analytics services.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Users must comply with platform-specific guidelines and maintain authentic engagement with their content.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    6
                  </span>
                  Subscriptions
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Some parts of the Service are billed on a subscription
                      basis. You will be billed in advance on a recurring and
                      periodic basis. Billing cycles are set either on a monthly
                      or annual basis, depending on the type of subscription
                      plan you select.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      At the end of each Billing Cycle, your Subscription will
                      automatically renew under the exact same conditions unless
                      you cancel it or Mediaweb cancels it.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      A valid payment method is required to process payment for
                      your Subscription. You authorize Mediaweb to charge all
                      Subscription fees incurred through your account.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Should automatic billing fail, Mediaweb will issue an
                      electronic invoice indicating that you must proceed
                      manually with payment within the specified deadline.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    7
                  </span>
                  Free Trial
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Mediaweb may offer a Subscription with a free trial for a
                      limited period of time.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      You may be required to enter billing information to sign
                      up for the Free Trial.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      You will not be charged until the Free Trial expires. On
                      the last day, unless cancelled, you will be automatically
                      charged the applicable Subscription fees.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Mediaweb reserves the right to modify or cancel the Free
                      Trial offer at any time without notice.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    8
                  </span>
                  Fee Changes
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Mediaweb may modify Subscription fees at any time. Any fee
                      change will become effective at the end of the
                      then-current Billing Cycle.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      We will provide reasonable prior notice of any change in
                      Subscription fees to give you an opportunity to terminate
                      your Subscription.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Your continued use after the fee change constitutes
                      agreement to pay the modified Subscription fee amount.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    9
                  </span>
                  Refunds
                </h2>
                <p className="text-gray-300 leading-7">
                  Certain refund requests for Subscriptions may be considered by
                  Mediaweb on a case-by-case basis and granted in sole
                  discretion of Mediaweb.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    10
                  </span>
                  Content
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Our Service allows you to post, link, store, share and
                      make available certain content. You are responsible for
                      the Content that you post to the Service.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      By posting Content, you grant us the right and license to
                      use, modify, publicly perform, display, reproduce, and
                      distribute such Content on and through the Service.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      You represent and warrant that the Content is yours or you
                      have the right to use it and grant us the rights and
                      license provided in these Terms.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    11
                  </span>
                  Accounts
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      When creating an account, you must provide accurate,
                      complete, and current information at all times.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      You are responsible for safeguarding your password and for
                      any activities or actions under your password.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      You must notify us immediately upon becoming aware of any
                      breach of security or unauthorized use of your account.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      You may not use as a username the name of another person
                      or entity or that is not lawfully available for use.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    12
                  </span>
                  Intellectual Property
                </h2>
                <p className="text-gray-300 leading-7">
                  The Service and its original content (excluding Content
                  provided by users), features and functionality are and will
                  remain the exclusive property of Mediaweb and its licensors.
                  The Service is protected by copyright, trademark, and other
                  relevant laws.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    13
                  </span>
                  Links to Other Websites
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Our Service may contain links to third-party websites or
                      services that are not owned or controlled by Mediaweb.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Mediaweb has no control over, and assumes no
                      responsibility for, the content, privacy policies, or
                      practices of any third party websites or services.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      We strongly advise you to read the terms and conditions
                      and privacy policies of any third-party websites or
                      services that you visit.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    14
                  </span>
                  Termination
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      We may terminate or suspend your account immediately,
                      without prior notice or liability, for any reason
                      whatsoever, including if you breach the Terms.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Upon termination, your right to use the Service will
                      immediately cease. If you wish to terminate your account,
                      you may simply discontinue using the Service.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    15
                  </span>
                  Limitation of Liability
                </h2>
                <p className="text-gray-300 leading-7">
                  In no event shall Mediaweb, nor its directors, employees,
                  partners, agents, suppliers, or affiliates, be liable for any
                  indirect, incidental, special, consequential or punitive
                  damages, including without limitation, loss of profits, data,
                  use, goodwill, or other intangible losses, resulting from your
                  access to or use of or inability to access or use the Service.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    16
                  </span>
                  Disclaimer
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Your use of the Service is at your sole risk. The Service
                      is provided on an "AS IS" and "AS AVAILABLE" basis without
                      warranties of any kind.
                    </span>
                  </li>
                  <li className="flex items-start text-gray-300 leading-7">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0"></div>
                    <span>
                      Mediaweb does not warrant that the Service will function
                      uninterrupted, secure or available at any particular time
                      or location; that any errors or defects will be corrected.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-primary to-primary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    17
                  </span>
                  Governing Law
                </h2>
                <p className="text-gray-300 leading-7">
                  These Terms shall be governed and construed in accordance with
                  the laws of Norway, without regard to its conflict of law
                  provisions.
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h2 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-r from-secondary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-sm mr-3">
                    18
                  </span>
                  Changes
                </h2>
                <p className="text-gray-300 leading-7">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material we will try to provide at
                  least 30 days notice prior to any new terms taking effect. By
                  continuing to access or use our Service after those revisions
                  become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Questions About These Terms?
                </h3>
                <p className="text-gray-300 mb-6">
                  If you have any questions about these Terms of Service, please
                  contact us through our support channels.
                </p>
                <div className="flex items-center justify-center space-x-2 text-secondary">
                  <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm">
                    We're committed to transparent service
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

export default TermsOfService;
