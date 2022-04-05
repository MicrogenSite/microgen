import { useEffect } from "react";
import { useRouter } from "next/router";
import { Section } from "../components/section";
import { useEditState } from "tinacms/dist/edit-state";

const GoToEditPage: React.FC = () => {
  const { setEdit } = useEditState();
  const router = useRouter();
  useEffect(() => {
    setEdit(true);
    router.back();
  }, []);
  return (
    <Section className="flex-1">
      <h2>Going into edit mode...</h2>
    </Section>
  );
};

export default GoToEditPage;
