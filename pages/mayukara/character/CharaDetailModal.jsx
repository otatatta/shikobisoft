import { Col, Row, Modal, Segmented, Button, Spin } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  CloseOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import Background from "../../static/hp1_bg.png";
import CharaTxt from "./txts";
import CharaTxtImg from "./txtsImg";
import { Z_INDEX } from "../../../consts/layout";
import styles from "./CharaDetailModal.module.css";

export default function CharaDetailModal({
  isMobile,
  charaStand,
  charatxt,
  charaValue,
  value,
  setValue,
  open,
  onCancel,
  onchangeChara,
}) {
  return (
    <Modal
      centered
      closeIcon={
        !isMobile ? (
          <></>
        ) : (
          <CloseOutlined className={styles.closeIcon} />
        )
      }
      open={open}
      onCancel={onCancel}
      className={styles.modalRoot}
      width={!isMobile ? "1720px" : "95%"}
      bodyStyle={{ height: !isMobile ? `880px` : `820px` }}
      cancelText="閉じる"
      zIndex={Z_INDEX.MODAL_BASE}
      footer={<></>}
    >
      {!isMobile ? (
        <>
          {charaStand ? (
            <>
              <Row className={styles.desktopBgRow}>
                <Image
                  alt="Shikoshikoback"
                  src={Background}
                  className={styles.desktopBgImage}
                />
              </Row>
              <Row
                gutter={{ xs: 8, sm: 16, md: 24 }}
                align="middle"
                className={styles.desktopContentRow}
                style={{ zIndex: Z_INDEX.MODAL_INNER }}
                fill
              >
                <Col span={6} className={styles.desktopLeftCol}>
                  <Row>
                    <div className={styles.charaStandWrapper}>
                      {charaStand}
                    </div>
                    <span
                      className={styles.segmentedWrapper}
                      style={{ zIndex: Z_INDEX.MODAL_SEGMENTED }}
                    >
                      <Segmented
                        className={styles.segmentedInner}
                        options={charaValue?.options ?? ["1"]}
                        value={value}
                        onChange={setValue}
                        size={"large"}
                      />
                    </span>
                  </Row>
                </Col>
                <Col span={16} align="top">
                  {charatxt}
                  <Row
                    className={styles.desktopBottomRow}
                    style={{ zIndex: Z_INDEX.MODAL_BASE }}
                    align="middle"
                  ></Row>
                </Col>
              </Row>
              {charaValue?.index > 0 && (
                <Button
                  type="text"
                  onClick={() => onchangeChara(charaValue.index - 1)}
                  className={styles.navButtonLeft}
                  style={{ zIndex: Z_INDEX.MODAL_INNER }}
                  icon={
                    <LeftOutlined className={styles.navArrowIcon} block />
                  }
                ></Button>
              )}
              {charaValue?.index !== undefined && (
                <Button
                  type="text"
                  onClick={() => onchangeChara(charaValue.index + 1)}
                  className={styles.navButtonRight}
                  style={{ zIndex: Z_INDEX.MODAL_INNER }}
                  icon={
                    <RightOutlined className={styles.navArrowIcon} block />
                  }
                ></Button>
              )}
              <Button
                className={styles.desktopCloseButton}
                style={{ zIndex: Z_INDEX.MODAL_INNER }}
                onClick={onCancel}
              >
                閉じる
              </Button>
            </>
          ) : (
            <Spin
              indicator={
                <LoadingOutlined className={styles.spinnerIcon} spin />
              }
            />
          )}
        </>
      ) : (
        <>
          <Image
            alt="Shikoshikoback"
            src={Background}
            className={styles.mobileBgImage}
            fill
          />
          <div className={styles.mobileCharaStandContainer}>
            {charaStand}
          </div>
          <Row
            justify={"space-between"}
            className={styles.mobileNavRow}
          >
            {charaValue?.index > 0 ? (
              <Button
                type="text"
                onClick={() => onchangeChara(charaValue.index - 1)}
                icon={
                  <LeftOutlined className={styles.mobileNavArrowIcon} />
                }
              ></Button>
            ) : (
              <div></div>
            )}

            {charaValue?.index !== undefined && (
              <Button
                type="text"
                onClick={() => onchangeChara(charaValue.index + 1)}
                icon={
                  <RightOutlined className={styles.mobileNavArrowIcon} />
                }
              ></Button>
            )}
          </Row>
          <div className={styles.mobileInfoPanel}>
            <div className={styles.mobileCharaName}>
              《{charaValue?.names}》
              <div className={styles.mobileCharaSubName}>
                ー{charaValue?.name_sub}ー
              </div>
            </div>
            <div
              className={styles.mobileDescriptionArea}
              style={{ zIndex: Z_INDEX.MODAL_BASE }}
            >
              {CharaTxt(charaValue?.selected_name) ?? ""}
            </div>
            <div className={styles.mobileSegmentedContainer}>
              <Segmented
                options={charaValue?.options ?? ["1"]}
                value={value}
                onChange={setValue}
                size={"middle"}
              />
            </div>
          </div>
        </>
      )}
    </Modal>
  );
}
