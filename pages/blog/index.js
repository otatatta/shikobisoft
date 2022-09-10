import Link from "next/link";
import Image from 'next/image'
import { client } from "../../libs/client";
import shikoIcon from "../static/shikoIcon.png"
import Header from "../component/Header"

//SSG
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function Home({ blog }) {
  return (
    <div>
      <Header />
      <div style={{ padding: "1rem" }}>
        {blog.map((blog) => (
          <div key={blog.id}>
            <p>
              {blog.publishedAt?.substring(0, 10)}
            </p>
            <Link href={`blog/${blog.id}`}>
              <a href="">
                <p>
                  {blog.title}
                </p>
                <div>
                  {blog?.eyecatch ? (
                    <Image
                      src={blog.eyecatch?.url ?? shikoIcon}
                      alt="blogIcon"
                      width={300}
                      height={300}
                    />
                  ) : (
                    <Image
                      src={shikoIcon}
                      alt="No Image"
                      width={300}
                      height={300} />
                  )}
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}