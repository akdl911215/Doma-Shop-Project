import Link from "next/link";

const PostLink = (props) => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Bolg() {
  return (
    <>
      <h1>My Bolg</h1>
      <ul>
        <PostLink id="hello-nextjs" />
        <PostLink id="learn-nextjs" />
        <PostLink id="deploy-nextjs" />
      </ul>
    </>
  );
}

// export default function Home() {
//   return (
//     <ul>
//       <li>

//         <Link href="/post/abc">
//           <a>Go to pages/post/[pid].js</a>
//         </Link>
//       </li>
//       <li>
//         <Link href="/post/abc">
//           <a>abc component</a>
//         </Link>
//       </li>
//       <li>
//         <Link href="/post/abc?foo=bar">
//           <a>Also goes to pages/post/[pid].js</a>
//         </Link>
//       </li>
//       <li>
//         <Link href="/post/abc/a-comment">
//           <a>Go to pages/post/[pid]/[commnet].js</a>
//         </Link>
//       </li>
//       <li>
//         <Link href="/post/dynamicRoutingTest">
//           <a>Go to pages/post/[dynamicRoutingTest].js</a>
//         </Link>
//       </li>
//     </ul>
//   );
// }
