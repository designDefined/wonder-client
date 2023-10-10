import { NewWonder } from "../../../../types/wonder/newWonder";
import styles from "./ThumbnailUploader.module.scss";

export default function ThumbnailUploader({
  value,
  setValue,
}: {
  value: NewWonder["thumbnail"];
  setValue: (data: NewWonder["thumbnail"]) => void;
}) {
  return (
    <div className={styles.ThumbnailUploader}>
      <div className={styles.thumbnail}>
        <img
          className={styles.preview}
          src={
            value && value.url.length > 0
              ? value.url
              : "/assets/illustration/upload_area.png"
          }
        />
        <div className={styles.inputButton}>
          <label htmlFor="thumb">
            <img src={"/assets/icon/textarea/upload_image.svg"} />
            썸네일 이미지 등록
          </label>
          <input
            type="file"
            accept="image/*"
            id="thumb"
            onChange={(e) => {
              if (e.target.files) {
                const url = URL.createObjectURL(e.target.files[0]);
                const fileName = encodeURIComponent(e.target.files[0].name);
                setValue({
                  file: e.target.files[0],
                  url,
                  fileName,
                });
              }
            }}
          />
        </div>
      </div>
      <div className={styles.caution}>
        *10mb 이하 jpg, png, jpeg 파일만 가능해요 <br />
        *썸네일은 실제로는 3:4 비율로 보여요
      </div>
    </div>
  );
}
