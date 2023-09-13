import { Button } from "../../components/Button/Button";

export default function Dev() {
  return (
    <main>
      <Button isFullWidth isMainColored>
        주 버튼
      </Button>
      <Button isFullWidth>부 버튼</Button>
      <Button isMainColored>주 버튼</Button>
      <Button>부 버튼</Button>
      <Button isSmallSized isMainColored>
        주 버튼
      </Button>
      <Button isSmallSized>부 버튼</Button>
    </main>
  );
}
