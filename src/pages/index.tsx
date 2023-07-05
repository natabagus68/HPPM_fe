import useLandingPage from "./landing-page-model";

export default function LandingPage() {
  const hook = useLandingPage();
  return <button onClick={() => hook.navigate("admin")}>Admin</button>;
}
