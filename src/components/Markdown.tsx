import {
  Box,
  BoxProps,
  Code,
  Divider,
  Heading,
  Img,
  Link,
  Table,
  Text,
  Th,
} from "@chakra-ui/react";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";
import ReactMarkdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

const heading: Components["h1"] = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { level } = props as any;
  const sizes = ["2xl", "xl", "lg", "md", "sm", "xs"];
  const marginTop = ["20", "16", "12", "8", "4", "4"];
  const marginBottom = ["10", "8", "6", "4", "2", "2"];
  return (
    <Heading
      as={`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
      size={sizes[level - 1]}
      mt={marginTop[level - 1]}
      mb={marginBottom[level - 1]}
      {...props}
    />
  );
};

const markdownTheme: Components = {
  a: (props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { children, href, ...rest } = props as any;
    return (
      <Link href={href} isExternal {...rest}>
        {children}
      </Link>
    );
  },
  h1: heading,
  h2: heading,
  h3: heading,
  h4: heading,
  h5: heading,
  h6: heading,
  hr: () => <Divider />,
  blockquote: (props) => {
    return (
      <Box
        w="full"
        as="blockquote"
        p={2}
        pb="1px"
        borderLeft="4px solid"
        borderColor="inherit"
        my={2}
      >
        {props.children}
      </Box>
    );
  },
  table: (props) => <Table w="auto" {...props} />,
  th: (props) => <Th fontFamily="body">{props.children}</Th>,
  br: () => <br />,
  img: (props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { align } = props as any;
    let marginProps = {};
    if (align === "left") {
      marginProps = { mr: 4 };
    } else if (align === "right") {
      marginProps = { ml: 4 };
    } else {
      marginProps = { w: "100%", mx: "auto" };
    }

    return <Img alt="image" {...marginProps} {...props} />;
  },
  p: (props) => (
    <Text mb="1rem" {...props}>
      {props.children}
    </Text>
  ),
  code: (props) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { inline } = props as any;

    if (inline) {
      return <Code {...props} />;
    }

    return (
      <Code
        whiteSpace="break-spaces"
        display="block"
        w="full"
        px={4}
        py={2}
        my={2}
        {...props}
      />
    );
  },
};

export const Markdown: React.FC<
  BoxProps & { children: string | undefined | null }
> = ({ children, ...props }) => (
  <Box w="100%" {...props}>
    <ReactMarkdown
      components={{ ...ChakraUIRenderer(), ...markdownTheme }}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
    >
      {children || ""}
    </ReactMarkdown>
  </Box>
);
