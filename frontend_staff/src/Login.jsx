import React from "react"


function Login() {
    return <div>
        <section class="py-24">
            <div class="px-6 h-full text-gray-800">
                <div
                    class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            class="w-full bg-red-300"
                            alt="Sample image"
                        />
                    </div>
                    <div class="xl:ml-20 xl:w-3/12 lg:w-3/12 md:w-8/12 mb-12 md:mb-0 bg-white px-12 py-12 rounded-lg drop-shadow-md">
                        <div className="text-center py-9">
                            <p className="font-bold text-3xl pb-3">Login</p>
                            <p className="font-thin">Enter your Credentials</p>
                        </div>
                        <form>
                            {/* <!-- Email input --> */}
                            <div class="mb-6">
                                <input
                                    type="text"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Email address"
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div class="mb-6">
                                <input
                                    type="password"
                                    class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    id="exampleFormControlInput2"
                                    placeholder="Password"
                                />
                            </div>

                            <div class="text-center">
                                <button
                                    type="button"
                                    class="inline-block px-10 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded-md shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">
                                    Login
                                </button>
                                <div class="text-center mb-6 pt-3 ">
                                    <a href="#!" class="text-gray-800 font-normal">Forgot password?</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </div>
};

export default Login;