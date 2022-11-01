/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
const MarUp = (props: { className?: string }) => {
  return (
    <div className={props.className + " "}>
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3> Header 3</h3>
      <h4>Header 4</h4>
      <p>
        <a href="http://localhost:3000/">Lorem ipsum</a> dolor sit amet,
        consectetur adipiscing elit. Curabitur nisi augue, imperdiet ac lectus
        non, aliquet mollis leo. Integer eu eleifend tortor. Duis quis nisi
        vitae turpis convallis iaculis. Vestibulum at diam ac nulla fermentum
        viverra in congue quam. Quisque mattis urna id nisi pharetra, vel
        gravida mi hendrerit. Aenean mattis sem sed purus feugiat sodales. In
        semper nibh sapien, eget mattis tortor mattis ut. Vivamus vel pretium
        leo. Aenean viverra tortor laoreet neque auctor scelerisque. Vivamus
        tortor nisl, molestie ac interdum id, hendrerit mattis urna. Nam sem
        justo, aliquam nec tincidunt quis, viverra et nulla.
      </p>
      <p>
        Donec eu urna vel sapien varius rhoncus et vel ante. Maecenas mollis
        suscipit ipsum ut fringilla. Fusce tortor nisi, sagittis eu erat a,
        scelerisque faucibus massa. Morbi fringilla quis purus id vestibulum.
        Pellentesque fermentum nisi laoreet consectetur viverra. Sed commodo est
        non lorem malesuada efficitur. Sed vestibulum diam id sapien
        ullamcorper, eget tempus odio dignissim.
      </p>

      <blockquote>
        Donec eu urna vel sapien varius rhoncus et vel ante. Maecenas mollis
        suscipit ipsum ut fringilla. Fusce tortor nisi, sagittis eu erat a,
        scelerisque faucibus massa.
      </blockquote>

      <ul>
        <li>
          gravida mi hendrerit. Aenean mattis sem sed purus feugiat sodales. In
          semper nibh sapien, eget mattis tortor mattis ut. Vivamus vel pretium
          leo. Aenean viverra tortor laoreet neque auctor scelerisque. Vivamus
          tortor nisl, molestie ac interdum id, hendrerit mattis urna.
        </li>
        <li>two </li>
        <li>three</li>
        <li>four</li>
      </ul>

      <ol>
        <li>
          gravida mi hendrerit. Aenean mattis sem sed purus feugiat sodales. In
          semper nibh sapien, eget mattis tortor mattis ut. Vivamus vel pretium
          leo. Aenean viverra tortor laoreet neque auctor scelerisque. Vivamus
          tortor nisl, molestie ac interdum id, hendrerit mattis urna.
        </li>
        <li>zwei</li>
        <li>drei</li>
        <li>vier</li>
      </ol>

      <p>
        Donec eu urna vel sapien varius rhoncus et vel ante. Maecenas mollis
        suscipit ipsum ut fringilla. Fusce tortor nisi, sagittis eu erat a,
        scelerisque faucibus massa. Morbi fringilla quis purus id vestibulum.
        Pellentesque fermentum nisi laoreet consectetur viverra. Sed commodo est
        non lorem malesuada efficitur. Sed vestibulum diam id sapien
        ullamcorper, eget tempus odio dignissim.
      </p>
    </div>
  );
};

const Style = () => {
  return (
    <div className="mt-44 ">
      {/* <div className=" mx-auto w-full h-[1000px] relative">
        <img
          style={{
            border: "red solid 1px",
            position: "absolute",
            height: "100%",
            width: "100%",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: "transparent",
            backgroundSize: "cover",
            backgroundPosition: "50% 50%",
            backgroundRepeat: "no-repeat",
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(0px)' x='0' y='0' height='100%25' width='100%25' href='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAALABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAYBBAUH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAAFERIGIjFxExQh/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAD/8QAGhEBAAMAAwAAAAAAAAAAAAAAAQAREwIhMf/aAAwDAQACEQMRAD8A5X0vTs1Z6tnTy0gff5fztUe8s6hFD1FcaS/ZSs0a8VJG3LFbT79utWKwWJI138KcmaV5HXmxb3muat3A5h1U2Kt+jpsf1SrzFCe9fBwxaZ2DEAnbfDLIfYas/9k='/%3E%3C/svg%3E")`,
          }}
        />
      </div> */}

      <MarUp className="prose  mx-auto debug  " />

      <MarUp className="max-w-2xl mx-auto typo typo-spacings typo-sizes typo-weigths " />
      <MarUp className="max-w-2xl mx-auto bg-black typo-invert  typo-spacings typo-sizes typo-weigths  " />
    </div>
  );
};

export default Style;
