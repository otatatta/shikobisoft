import Link from "next/link";
// import Image from 'next/image'
import { client } from "../libs/client";
import styles from "../styles/Home.module.css";

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div className={styles.container}>
      {blog.map((blog) => (
        <li key={blog.id}>
          <Link href={`blog/${blog.id}`}>
            {/* <a href="">
              {blog.eyecatch ? (
                <Image
                  src={blog.eyecatch.url}
                  width={blog.eyecatch.width}
                  height={blog.eyecatch.height}
                />
              ) : (
                <Image src="/static/shikoIcon.png" alt="No Image" />
              )}
            </a> */}
            <a href="">{blog.title}</a>
          </Link>
        </li>
      ))}
    </div>
  );
}