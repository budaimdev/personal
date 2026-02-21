"use client";

import {Button} from "@heroui/button";
import {Input, Textarea} from "@heroui/input";
import {Card, CardBody} from "@heroui/card";
import {motion} from "framer-motion";

export default function ContactPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] py-8 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{
                        x: ["-10%", "10%", "-10%"],
                        y: ["-10%", "10%", "-10%"],
                        scale: [1, 1.2, 1],
                        rotate: [0, 15, 0],
                    }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                    }}
                    className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40"
                />
                <motion.div
                    animate={{
                        x: ["10%", "-10%", "10%"],
                        y: ["10%", "-10%", "10%"],
                        scale: [1, 0.8, 1],
                        rotate: [0, -10, 0],
                    }}
                    transition={{
                        duration: 50,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                        delay: 5,
                    }}
                    className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] opacity-30"
                />
            </div>

            <motion.div
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
                className="relative z-10 text-center mb-12"
            >
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                    Get in Touch
                </h1>
                <p className="text-xl text-default-500 max-w-2xl mx-auto">
                    Have a project in mind or just want to say hi? I'd love to hear from you.
                </p>
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 gap-8 w-full max-w-5xl">
                {/* Contact Form */}
                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.4, duration: 0.5}}
                >
                    <Card className="h-full shadow-lg bg-content1/80 backdrop-blur-md border-default-200/50">
                        <form>
                            <CardBody className="p-8 gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <Input
                                        type="text"
                                        label="Name"
                                        placeholder="John Doe"
                                        variant="bordered"
                                        labelPlacement="outside"
                                    />
                                    <Input
                                        type="email"
                                        label="Email"
                                        placeholder="john@example.com"
                                        variant="bordered"
                                        labelPlacement="outside"
                                    />
                                </div>
                                <Input
                                    type="text"
                                    label="Subject"
                                    placeholder="Project Inquiry"
                                    variant="bordered"
                                    labelPlacement="outside"
                                />
                                <Textarea
                                    label="Message"
                                    placeholder="Tell me about your project..."
                                    variant="bordered"
                                    labelPlacement="outside"
                                    minRows={6}
                                />
                                <Button color="primary" size="lg" className="w-full font-bold shadow-md mt-2">
                                    Send Message
                                </Button>
                            </CardBody>
                        </form>
                    </Card>
                </motion.div>
            </div>
        </div>
    );
}
