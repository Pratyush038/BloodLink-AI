import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface DetectionAlertEmailProps {
  pestDetections?: any[];
  diseaseDetections?: any[];
}

export default function DetectionAlertEmail({
  pestDetections = [],
  diseaseDetections = [],
}: DetectionAlertEmailProps) {
  const appName = process.env.NEXT_PUBLIC_APP_NAME || "BloodLink AI";
  
  return (
    <Html>
      <Head />
      <Preview>{appName} - Blood Shortage Alert</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={coverSection}>
            <Section style={upperSection}>
              <Heading style={h1}>Blood Shortage Alert</Heading>
              <Text style={mainText}>
                This is an automated alert from {appName} regarding blood shortage detection.
              </Text>

              {pestDetections && pestDetections.length > 0 && (
                <>
                  <Heading style={h2}>Pest Detections</Heading>
                  <Section style={detectionSection}>
                    {pestDetections.map((detection, index) => (
                      <Text key={index} style={detectionText}>
                        • {JSON.stringify(detection)}
                      </Text>
                    ))}
                  </Section>
                </>
              )}

              {diseaseDetections && diseaseDetections.length > 0 && (
                <>
                  <Heading style={h2}>Disease Detections</Heading>
                  <Section style={detectionSection}>
                    {diseaseDetections.map((detection, index) => (
                      <Text key={index} style={detectionText}>
                        • {JSON.stringify(detection)}
                      </Text>
                    ))}
                  </Section>
                </>
              )}

              <Hr style={hr} />
              <Text style={footerText}>
                This is an automated message from {appName}. Please take appropriate action.
              </Text>
            </Section>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#fff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "560px",
};

const coverSection = {
  backgroundColor: "#fff",
};

const upperSection = {
  padding: "25px 35px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
};

const h2 = {
  color: "#333",
  fontSize: "18px",
  fontWeight: "bold",
  margin: "20px 0 10px",
  padding: "0",
};

const mainText = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "16px 0",
};

const detectionSection = {
  backgroundColor: "#f4f4f4",
  borderRadius: "4px",
  padding: "16px",
  margin: "16px 0",
};

const detectionText = {
  color: "#333",
  fontSize: "14px",
  lineHeight: "22px",
  margin: "8px 0",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footerText = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
  margin: "16px 0",
};
