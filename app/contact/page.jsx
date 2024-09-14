import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/*  Contact Form */}
          <div className="text-center xl:text-left">
            <h1 className="h1 mb-6">
              Contact Me
            </h1>
            <form className="max-w-[500px] space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium" >
                  Your Message
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  rows="4"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <Button className="bg-accent text-black px-4 py-2 rounded-md hover:bg-green-600 transition-all">
  Send Message
</Button>

            </form>
          </div>

          {/* my contact*/}
          <div className="mt-12 xl:mt-0 text-center xl:text-left">
            <h2 className="text-2xl font-bold">Mohamed Amine FRAJ </h2>
            <p className="mt-4">
              <strong>Email:</strong> amine0924@gmail.com
            </p>
            <p className="mt-4">
              <strong>Phone:</strong> +21652680566
            </p>
            <p className="mt-4">
              <strong>Address:</strong> 16 Rue Omar Mokhtar, Ariana, Tunisia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
