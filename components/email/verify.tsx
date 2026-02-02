import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

const AccountVerificationEmail = (props) => {
  const { userEmail, verificationUrl, companyName } = props;

  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Verify your account to get started</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] shadow-sm max-w-[600px] mx-auto px-[40px] py-[40px]">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 mb-[16px] m-0">
                Verify Your Account
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Welcome to {companyName}! Please verify your email address to
                complete your account setup.
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                Hi there,
              </Text>
              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                Thanks for signing up! To ensure the security of your account
                and enable all features, please verify your email address by
                clicking the button below.
              </Text>
              <Text className="text-[14px] text-gray-600 mb-[32px] m-0">
                Account email: <strong>{userEmail}</strong>
              </Text>
            </Section>

            {/* Verification Button */}
            <Section className="text-center mb-[32px]">
              <Button
                href={verificationUrl}
                className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-semibold no-underline box-border inline-block"
              >
                Verify Email Address
              </Button>
            </Section>

            {/* Alternative Link */}
            <Section className="mb-[32px]">
              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                If the button above doesn't work, you can also verify your
                account by copying and pasting this link into your browser:
              </Text>
              <Text className="text-[14px] text-blue-600 break-all m-0">
                <Link
                  href={verificationUrl}
                  className="text-blue-600 underline"
                >
                  {verificationUrl}
                </Link>
              </Text>
            </Section>

            {/* Security Note */}
            <Section className="bg-gray-50 rounded-[8px] p-[24px] mb-[32px]">
              <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                <strong>Security Note:</strong>
              </Text>
              <Text className="text-[14px] text-gray-600 m-0">
                This verification link will expire in 24 hours for security
                reasons. If you didn't create an account with us, please ignore
                this email.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px]">
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                © 2026 {companyName}. All rights reserved.
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                123 Business Street, Suite 100, Business City, BC 12345
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mt-[8px] m-0">
                <Link href="#" className="text-gray-500 underline">
                  Unsubscribe
                </Link>
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

AccountVerificationEmail.PreviewProps = {
  userEmail: "bolgarfelipe@gmail.com",
  verificationUrl: "https://yourapp.com/verify?token=abc123xyz789",
  companyName: "lulú",
};

export default AccountVerificationEmail;
