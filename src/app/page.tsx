import ChangeUsername from "@/components/change-username";
import ConditionalButton from "@/components/conditional-button";
import Counter from "@/components/counter";
import HelloWorld from "@/components/hello-world";
import ShowAlert from "@/components/show-alert";
import UsernameProvider from "@/context/username-context";

export default function Home() {
  return (
    <>
      <UsernameProvider>
        <HelloWorld />
        <ChangeUsername />
        <Counter />
        <ConditionalButton />
        <ShowAlert />
      </UsernameProvider>
    </>
  );
}
