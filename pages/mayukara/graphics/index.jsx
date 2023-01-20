import { List, Image } from 'antd';
import React from 'react';
// import NoImage from "../../static/mayuimage.jpg";
const noimg = "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/0283dcaf2e624790ae5274ed6d351c56/mayuimage.jpg?w=300"

const data = [
    {
        title: 'cg_1',
        path: "https://images.microcms-assets.io/assets/5309d67b60eb4f779993a5bde21d922a/cba29e966f114f4b844bc5b2d5f76ac2/cg02-1.png",
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
    {
        title: 'Noimg',
        path: noimg,
    },
];
const Graphics = ({ setHideButton }) => (

    <List
        grid={{
            gutter: 16,
            xs: 1,
            sm: 2,
            md: 4,
            lg: 4,
            xl: 6,
            xxl: 3,
        }}
        dataSource={data}
        renderItem={(item, index) => (
            <List.Item colStyle={{ textAlign: "center" }} key={`cg_${index}`}>
                {item.title !== "Noimg" ? (<Image
                    width={200}
                    height={120}
                    src={item.path}
                    preview={{
                        src: item.path, onVisibleChange: (value) => {
                            setHideButton(value);
                        }
                    }}
                    alt={`cg_${index}`}
                    placeholder={<p>place</p>}
                />) : (
                    <Image
                        width={200}
                        height={120}
                        src={item.path}
                        preview={item.title !== "Noimg"}
                        alt={"noIMG"}
                    />
                )}
            </List.Item>
        )}
    />
);
export default Graphics;