import {
  Box,
  // Button,
  // FormControl,
  // FormErrorMessage,
  // FormLabel,
  // Input,
  // Textarea,
  // VStack,
} from "@chakra-ui/react";
import type { CustomNextPage } from "next";
// import { useForm } from "react-hook-form";
// import { SectionTitle } from "src/component/SectionTitle";
import { BlogLayout } from "src/layout";

// const formItem = [
//   {
//     id: "name",
//     placeholder: "",
//     text: "お名前",
//   },
//   {
//     id: "email",
//     placeholder: "",
//     text: "メールアドレス",
//   },
//   {
//     id: "description",
//     placeholder: "",
//     text: "ご相談内容",
//     textarea: true,
//   },
// ];

const Contact: CustomNextPage = () => {
  // const {
  //   handleSubmit,
  //   register,
  //   formState: { errors, isSubmitting },
  // } = useForm();

  // const onSubmit = () => {
  //   window.alert("送信されました。");
  // };

  return (
    <Box minW="400px" maxW="700px" p="10" marginRight="auto" marginLeft="auto">
      <iframe
        height="470px"
        src="https://www.noway-form.com/f/d9ebbf09-7c18-46f7-80c2-58e2f006d045/embed"
      />
      {/* <SectionTitle titleEn="contact" titleJa="お問い合わせ" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack>
          {formItem.map((item) => {
            return (
              <FormControl isInvalid={errors[item.id]} key={item.id}>
                <FormLabel htmlFor={item.id}>{item.text}</FormLabel>
                {item.textarea ? (
                  <Textarea
                    id={item.id}
                    placeholder={item.id}
                    {...register(item.id, {
                      required: "This is required",
                    })}
                    minH="150px"
                  />
                ) : (
                  <Input
                    id={item.id}
                    placeholder={item.id}
                    {...register(item.id, {
                      required: "This is required",
                      minLength: {
                        value: 4,
                        message: "Minimum length should be 4",
                      },
                    })}
                  />
                )}

                <FormErrorMessage>
                  {errors[item.id] && errors[item.id].message}
                </FormErrorMessage>
              </FormControl>
            );
          })}
        </VStack>

        <Button
          size={"lg"}
          mt={4}
          colorScheme="white"
          _hover={{ border: "1px", borderColor: "blue.200" }}
          color={"blue.400"}
          isLoading={isSubmitting}
          type="submit"
        >
          送信
        </Button>
      </form> */}
    </Box>
  );
};

Contact.getLayout = BlogLayout;

export default Contact;
