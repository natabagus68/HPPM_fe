import useLandingPage from "./_landing-page-model";

export default function Index() {
  const hook = useLandingPage();
  return <button onClick={() => hook.navigate("admin")}>Admin</button>;
}
