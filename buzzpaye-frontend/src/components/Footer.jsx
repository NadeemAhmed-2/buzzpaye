// // export default function Footer() {
// //   return (
// //     <footer className="bg-gray-100 text-center py-3 mt-10 text-sm text-gray-600">
// //       © {new Date().getFullYear()} BuzzPaye — Influencer Booking Platform
// //     </footer>
// //   );
// // }

// export default function Footer() {
//   return (
//     <footer className="bg-secondary text-white text-center py-4 text-sm font-semibold">
//       © {new Date().getFullYear()}{" "}
//       <span className="text-primary">BuzzPaye</span> — Influencer Booking
//       Platform
//     </footer>
//   );
// }



export default function Footer() {
  return (
    <footer className="bg-grayCustom text-white px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
            BuzzPaye
          </h2>
          <p className="text-white/80 leading-relaxed">
            BuzzPaye is an AI-powered influencer marketing platform 
            connecting brands with top creators for seamless campaign 
            collaborations and growth.
          </p>
        </div>

        {/* Middle Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-white/80">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">Influencer List</li>
            <li className="hover:text-primary cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-white/80">+91 7396753496</p>
          <p className="text-white/80 mt-2">
            support@buzzpaye.com
          </p>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-white/60 mt-10 border-t border-white/10 pt-6">
        © {new Date().getFullYear()}{" "}
        <span className="text-primary font-semibold">BuzzPaye</span> — All Rights Reserved.
      </div>
    </footer>
  );
}