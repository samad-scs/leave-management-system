
"use client";

import { Card, CardBody } from "@nextui-org/card";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Link } from "@nextui-org/link";
import Spinner from "@/components/custom-components/spinner/spinner";
import { authConfig } from "@/config/auth";
import { patterns } from "../../constants/patterns";
import { useRouter } from "next/navigation";

const Login = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: { email: "", password: "" },
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log("data", data);
  };

  useEffect(() => {
    const userToken = localStorage.getItem(authConfig.storageToken);

    if (userToken) {
      router.push("/dashboard");
    } else {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <div className="flex w-full items-center justify-center h-full ">
          <div className="w-96">
            <Card shadow="lg" className="w-full">
              <CardBody>
                <div className="flex justify-center mb-5">
                  <h2 className="text-2xl font-bold tracking-wide">Login</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Please enter a email",
                        pattern: {
                          value: patterns.emailAdvancedPattern,
                          message: "Please enter a valid email",
                        },
                      }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Input
                          value={value}
                          label="Email"
                          onBlur={onBlur}
                          onChange={onChange}
                          autoComplete="off"
                          errorMessage={errors?.email?.message}
                        />
                      )}
                    />
                  </div>
                  <div className="mb-4">
                    <Controller
                      name="password"
                      control={control}
                      rules={{
                        required: "Please enter a password",
                        pattern: {
                          value: patterns.passwordPattern,
                          message:
                            "Please must include an uppercase, lowercase, number and a special character",
                        },
                      }}
                      render={({ field: { value, onChange, onBlur } }) => (
                        <Input
                          type="password"
                          value={value}
                          label="Password"
                          onBlur={onBlur}
                          onChange={onChange}
                          autoComplete="off"
                          errorMessage={errors?.password?.message}
                        />
                      )}
                    />
                  </div>

                  <Button type="submit" fullWidth>
                    Login
                  </Button>
                </form>
                <div className="text-center mt-4">
                  <Link href="/register" color="secondary" role="button">
                    {`Don't have an account? Register`}
                  </Link>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </>
    );
  }
};
export default Login;
