import { Col, Row, Button } from "antd";
import Image from "next/image";
import { pcList1 } from "../../../consts/characters";
import styles from "./CharaGrid.module.css";

export default function CharaGrid({ isMobile, onClickButton }) {
  if (!isMobile) {
    return (
      <Row gutter={16} md="4" lg="4" xl="4" xxl="4" align="middle">
        {pcList1?.map((list, index) => (
          <div
            className={styles.gridItem}
            key={`aaaa_${index}`}
          >
            <div>
              <Button
                type="text"
                shape="circle"
                className={styles.iconButton}
                onClick={() => onClickButton(list, index)}
              >
                <Image
                  src={list?.icon}
                  alt="Image"
                  width={160}
                  height={160}
                />
              </Button>
            </div>
            <div>
              <Button
                type="text"
                onClick={() => onClickButton(list, index)}
              >
                <Image src={list?.name_img} alt="Image" height={30} />
              </Button>
            </div>
          </div>
        ))}
      </Row>
    );
  }

  return (
    <Row
      gutter={{
        xs: 8,
        sm: 16,
      }}
      align="middle"
    >
      {pcList1?.map((list, index) => (
        <Col span={12} key={`aaaa_${index}`}>
          <div>
            <Button
              type="text"
              className={styles.mobileIconButton}
              onClick={() => onClickButton(list, index)}
            >
              <Image
                src={list?.icon}
                alt="Image"
                width={100}
                height={100}
              />
            </Button>
          </div>
          <div>
            <Button
              type="text"
              onClick={() => onClickButton(list, index)}
            >
              <Image src={list?.name_img} alt="Image" height={15} />
            </Button>
          </div>
        </Col>
      ))}
    </Row>
  );
}
