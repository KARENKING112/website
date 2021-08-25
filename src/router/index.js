import { createRouter, createWebHistory } from "vue-router";
import matter from "gray-matter";
import { Buffer } from "buffer";
import MarkdownIt from "markdown-it";
import MarkdownItEmoji from "markdown-it-emoji";
import MarkdownItLink from "markdown-it-link-attributes";

window.Buffer = Buffer;

export default async () => {
  const mi = new MarkdownIt();

  const routes = [
    {
      path: "/",
      component: () => import("../views/Home.vue"),
    },
  ];

  for (const [_id, post] of Object.entries(
    import.meta.glob("../../posts/*.md")
  )) {
    const id = _id.split("/").slice(-1)[0].replace(".md", "");
    const path = `/posts/${id}`;
    const { data, content } = matter(
      await (await fetch((await post()).default)).text()
    );

    routes.push({
      path,
      component: () => import("../views/Post.vue"),
      props: {
        data,
        content: mi.render(content),
      },
    });
  }

  return createRouter({
    history: createWebHistory(),
    routes,
  });
};
