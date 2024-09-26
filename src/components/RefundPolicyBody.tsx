const RefundPolicyBody: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="max-w-4xl mx-auto">
        {/* 1. Introduction */}
        <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
        <p className="mb-6">
          The following Refund Policy is applicable to all users of the
          QuickApply platform, a specialized Software-as-a-Service (SaaS)
          solution offered by CLOUTRA. By opting into our services, you, the
          subscriber, agree to adhere to the guidelines outlined below.
        </p>

        {/* 2. Commitment */}
        <h2 className="text-3xl font-bold mb-6">2. Commitment</h2>
        <p className="mb-6">
          Our goal at QuickApply is to deliver a high-quality service that
          achieves real results for our users. We value the trust you place in
          our platform, and in recognition of this, we have developed this
          policy to explain our refund procedure if our service fails to meet
          the expected outcomes.
        </p>

        {/* 3. Refund Guidelines */}
        <h2 className="text-3xl font-bold mb-6">3. Refund Guidelines</h2>
        <p className="mb-6">
          Under the conditions of this policy, QuickApply offers a 30-day
          money-back guarantee. Should you not secure any interview
          opportunities via our service within this timeframe, you may qualify
          for a full refund of your subscription cost.
        </p>

        {/* 3.1. Criteria for Eligibility */}
        <h3 className="text-xl font-semibold mb-4">
          3.1. Criteria for Eligibility
        </h3>
        <ul className="list-disc list-inside mb-6 space-y-4">
          <li>
            <strong>Initial Sign-up:</strong> This refund is only applicable to
            first-time subscriptions, not to renewals or subsequent
            subscriptions.
          </li>
          <li>
            <strong>Request Period:</strong> Requests for refunds must be made
            within 30 days of the subscription start date.
          </li>
          <li>
            <strong>Proof Requirement:</strong> Subscribers must provide proof,
            such as records of application submissions and lack of interview
            offers, to support their request.
          </li>
          <li>
            <strong>Refund Method:</strong> Refunds will be issued to the
            payment method used for the original subscription.
          </li>
          <li>
            <strong>Processing Duration:</strong> The refund process will begin
            immediately upon approval of your claim, though the actual credit
            may take up to 10 business days to appear in your account, depending
            on your bank's processing times.
          </li>
        </ul>

        {/* 4. Initiating a Refund */}
        <h2 className="text-3xl font-bold mb-6">4. Initiating a Refund</h2>
        <p className="mb-6">To request a refund:</p>
        <ul className="list-disc list-inside mb-6 space-y-4">
          <li>
            <strong>Contact Us:</strong> You must inform our customer support
            team of your decision via formal communication.
          </li>
          <li>
            <strong>Provide Documentation:</strong> You must submit the
            necessary documentation as described in Section 3.1.
          </li>
          <li>
            <strong>Follow Instructions:</strong> You must follow any additional
            instructions or steps as required by our support team.
          </li>
        </ul>

        {/* 5. Feedback for Improvement */}
        <h2 className="text-3xl font-bold mb-6">5. Feedback for Improvement</h2>
        <p className="mb-6">
          We welcome and value feedback from our users on this policy. Your
          input helps us continuously improve and better align our services with
          your needs.
        </p>

        {/* 6. Inquiries */}
        <h2 className="text-3xl font-bold mb-6">6. Inquiries</h2>
        <p className="mb-6">
          Should you have any questions or wish to request a refund under this
          policy, please reach out to our support team through the contact
          methods provided on the QuickApply platform.
        </p>

        {/* 7. Notice */}
        <h2 className="text-3xl font-bold mb-6">7. Notice</h2>
        <p className="mb-6">
          Please be aware that this Refund Policy is subject to the laws of
          India and may be updated at any time without notice. We advise
          subscribers to review this policy regularly. Continued use of
          QuickApply services constitutes acceptance of any changes to these
          terms.
        </p>
      </div>
    </section>
  );
};

export default RefundPolicyBody;
