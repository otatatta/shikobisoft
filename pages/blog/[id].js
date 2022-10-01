import { client } from "../../libs/client";
import { formatDate } from "../func/funcs"
import { Button } from 'antd';
import Link from "next/link";
import Footer from "../component/Footer"
// import React, { useState } from 'react';

//SSG
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths,
    fallback: false,
  };
};

export default function BlogId({ blog }) {
  const published = new Date(blog.publishedAt)
  // const size = useState('large');
  return (
    <>
      <main style={{ textAlign: "left", width: "100%", padding: "1rem" }}>
        <h1>{blog.title}</h1>
        <p>更新日：{formatDate(published)}</p>
        <div
          dangerouslySetInnerHTML={{ __html: `${blog.content}` }}
        ></div>
        <Link href="../blog" >
          <Button shape={"round"} >
            <a className="headerLink" style={{ padding: "1rem" }}>一覧に戻る</a>
          </Button>
        </Link>
      </main>
      <Footer />
    </>
  );
}
