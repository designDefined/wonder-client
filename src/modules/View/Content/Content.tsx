import styles from "./Content.module.scss";
import { Wonder } from "../../../entity/wonder";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ContentProps = {
  content: Wonder["content"];
};

function Content({ content }: ContentProps) {
  return (
    <div className={cx("Content")}>
      <h1>20주년 정보문화학 과제전</h1>
      <h2>2022년 정보문화학 20주년 홈커밍 행사와 과제전을 합니다.</h2>
      <p>
        우리의 그들의 몸이 때에, 평화스러운 예가 얼음과 든 것이다. 사람은 곳으로
        사는가 얼음이 미인을 심장은 낙원을 있는 교향악이다.
        <strong>
          무엇이 가치를 가지에 못할 얼마나 심장의 영락과 되는 이성은 칼이다.
        </strong>
        가는 가지에 청춘은 없으면, 관현악이며, 인간에 오아이스도 피다. 대중을
        뜨거운지라, 날카로우나 뿐이다. 타오르고 설산에서 하는 심장은 같은
        청춘에서만 긴지라 힘있다. 피부가 얼음과 갑 놀이 하여도 위하여 끝까지
        공자는 황금시대다. 유소년에게서 아니더면, 것은 목숨이 같이 내려온 가는
        우리의 것이다. 곧 이상이 싸인 돋고, 청춘은 대중을 것이다. 같은 원질이
        열락의 만천하의 주는 밝은 있는가? 때에, 예수는 그들에게 것이다.
      </p>
      <ol>
        <li>하나</li>
        <li>둘</li>
        <li>셋</li>
      </ol>
      <ul>
        <li>하나</li>
        <li>둘</li>
        <li>셋</li>
      </ul>
    </div>
  );
}

function Placeholder() {
  return (
    <div className={cx("Content", "placeholder")}>
      선택된 아이템이 없습니다.
    </div>
  );
}

export default Content;
