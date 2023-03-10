import { FormEvent, useEffect, useState } from "react";
import axios from "axios";
import { Oval } from "react-loading-icons";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [firstRender, setFirstRender] = useState(true);

  const [nameMsg, setNameMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  const [subjectMsg, setSubjectMsg] = useState("");
  const [messageMsg, setMessageMsg] = useState("");

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!firstRender) validateName();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name]);

  useEffect(() => {
    if (!firstRender) validateEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [email]);

  useEffect(() => {
    if (!firstRender) validateSubject();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subject]);

  useEffect(() => {
    if (!firstRender) validateMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    if (firstRender) setFirstRender(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstRender]);

  const API = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_BASE_URL,
  });

  const saveContact = async (
    name: string,
    email: string,
    subject: string,
    message: string
  ) => {
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("email", email);
    params.append("message", message);
    params.append("subject", subject);
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");
    return await API.post("/api/contact", params)
      .then(({ data }) => {
        setSuccessMessage(data.message);
      })
      .catch((err) => {
        setErrorMessage(err.response.data.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const validateName = () => {
    if (name === "") setNameMsg("enter first name");
    else setNameMsg("");
  };

  const validateEmail = () => {
    if (email === "") setEmailMsg("enter email");
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
      setEmailMsg("enter valid email id");
    else setEmailMsg("");
  };

  const validateSubject = () => {
    if (subject === "") setSubjectMsg("enter subject");
    else setSubjectMsg("");
  };

  const validateMessage = () => {
    if (message === "") setMessageMsg("enter message");
    else setMessageMsg("");
  };

  function handleSubmit(e: FormEvent<HTMLButtonElement>): void {
    e.preventDefault();

    try {
      saveContact(name, email, subject, message);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <section
      id="contact"
      className="flex xs:flex-col md:flex-row justify-center xs:px-4 md:px-20 py-16 "
    >
      <p className="px-2 xs:w-full md:w-3/12 text-right mr-6 mt-0 mb-2 text-3xl font-medium leading-tight text-primary">
        I&apos;m always interested in hearing about new projects, so if
        you&apos;d like to chat please get in touch!
      </p>
      <div className="block xs:w-full md:w-6/12 rounded-lg bg-white p-6 shadow-lg dark:bg-neutral-700">
        {successMessage === "" ? (
          <form>
            {nameMsg ? (
              <span className="text-red-600 block text-right text-base">
                *{nameMsg}
              </span>
            ) : (
              ""
            )}
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput7"
                placeholder="Name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                readOnly={loading}
                onBlur={() => validateName()}
              />
              <label
                htmlFor="exampleInput7"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Name
              </label>
            </div>
            {emailMsg ? (
              <span className="text-red-600 block text-right text-base">
                *{emailMsg}
              </span>
            ) : (
              ""
            )}
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput8"
                placeholder="Email address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                readOnly={loading}
                onBlur={() => validateEmail()}
              />
              <label
                htmlFor="exampleInput8"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Email address
              </label>
            </div>
            {subjectMsg ? (
              <span className="text-red-600 block text-right text-base">
                *{subjectMsg}
              </span>
            ) : (
              ""
            )}
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInput7"
                placeholder="Subject"
                name="suject"
                onChange={(e) => setSubject(e.target.value)}
                readOnly={loading}
                onBlur={() => validateSubject()}
              />
              <label
                htmlFor="exampleInput7"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Subject
              </label>
            </div>
            {messageMsg ? (
              <span className="text-red-600 block text-right text-base">
                *{messageMsg}
              </span>
            ) : (
              ""
            )}
            <div className="relative mb-6" data-te-input-wrapper-init>
              <textarea
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlTextarea13"
                rows={3}
                placeholder="Message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                readOnly={loading}
                onBlur={() => validateMessage()}
              ></textarea>
              <label
                htmlFor="exampleFormControlTextarea13"
                className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
              >
                Message
              </label>
            </div>
            {/* <div className="mb-6 flex min-h-[1.5rem] items-center justify-center pl-[1.5rem]">
            <input
              className="relative float-left mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 dark:border-neutral-600 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary dark:checked:border-primary checked:bg-primary dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
              type="checkbox"
              value=""
              id="exampleCheck10"
            />
            <label
              className="inline-block pl-[0.15rem] hover:cursor-pointer"
              htmlFor="exampleCheck10"
            >
              Send me a copy of this message
            </label>
          </div> */}
            {/* {successMessage ? (
              <span className="text-green-600 block text-right text-xl">
                *{successMessage}
              </span>
            ) : (
              ""
            )} */}
            {errorMessage ? (
              <span className="text-red-600 block text-right text-xl">
                *{errorMessage}
              </span>
            ) : (
              ""
            )}
            <button
              type="submit"
              className={`w-full rounded bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg 
            ${
              name === "" ||
              email === "" ||
              subject === "" ||
              message === "" ||
              nameMsg !== "" ||
              emailMsg !== "" ||
              subjectMsg !== "" ||
              messageMsg !== "" ||
              loading
                ? "pointer-events-none opacity-75"
                : ""
            }}`}
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={(e) => handleSubmit(e)}
            >
              {loading ? (
                <Oval className="mx-auto" height="1.2rem" strokeWidth="3" />
              ) : (
                "Send"
              )}
            </button>
          </form>
        ) : (
          <span className="text-green-600 grid h-full place-items-center text-center text-xl">
            Your response has been registered successfully. Thank you for showing interest.
          </span>
        )}
      </div>{" "}
    </section>
  );
};

export default Contact;
