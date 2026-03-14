import React from "react";
import { Link } from "react-router";

const HomePage = () => {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <main className="flex-1">
        <section className="px-6 lg:px-20 py-16 lg:py-24 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold w-fit uppercase tracking-wider">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                New: Custom Domains for everyone
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-slate-900 dark:text-slate-100 text-5xl lg:text-7xl font-black leading-[1.1] tracking-tight">
                  Share your stories with the{" "}
                  <span className="text-primary">world</span>
                </h1>
                <p className="text-slate-600 dark:text-slate-400 text-lg lg:text-xl font-normal leading-relaxed max-w-xl">
                  The modern platform for writers to reach a global audience.
                  Experience powerful SEO, intuitive editors, and deep community
                  engagement.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary hover:bg-primary/90 text-white text-base font-bold px-8 py-4 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center gap-2">
                  Start Writing{" "}
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
                <button className="bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-900 dark:text-slate-100 text-base font-bold px-8 py-4 rounded-xl transition-all">
                  View Examples
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-background-light dark:border-background-dark"
                    data-alt="Portrait of a female blogger"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvB6Nt13kM0ijAGDwktcov880O-i7l202vj2IEpPnxGK5VA7tqVv4mZqHRglnIsofUkufRhpW1Me0h4PJKLRN8KnLJZFOEDPz3I93qRzkbRJ_kr-NkU1uTvDpHnDLURbmEHdMqPkP-0ZZEHTLdWzxeZIzJiLf2i5Rm1UTdMuffCOLHBQQSJselwkV1AdSuNOPMOpoh-9DQ2GdNKVnvAnGd7y2S8llyxSnLlKIXARn2EogZ6q4l217AEo2MUZYVG3j5RDiztMHk_no"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-background-light dark:border-background-dark"
                    data-alt="Portrait of a male content creator"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7R6wqjKJepvFKeCwoOHOKzIxWjWNLn9UeYWFdLypX40ly4zyRvTp9GKxpgie-v4MrQHrTvIV5k9qd8KO8cfmfVkRVqaaEdCn8ShHUUlT-AqYyj12lfnrLP0VOxHgS89G92IVr_VOfW-39hTP-6bTwzmhR8fNcpdxQrpS5fJcHjRJUrow_p8-anYSE3MFCslO68T0QWxcpEngepwQFvigCej68owqYjKzZ05ZMYSnTZnk1-sZ32aYWJo_NGGmmKEyjlusVGVsz8Q"
                  />
                  <img
                    className="w-10 h-10 rounded-full border-2 border-background-light dark:border-background-dark"
                    data-alt="Portrait of a smiling creative writer"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBtDp9UXonXddxG5RSWkvznQkRYTRUHfZhFM5ebFVzS1e581ciLpn3IyazaOZw3qbL1taHEeTU44OknIGC304n0q2RzhveAbh6t9vRkD6PflcHiB7Ktfs28kpEfCHBN1rb5bgvZwuS_n0nq7vt3ULwrukWttgiMYZYph7egitSnfLEdsHqBW1JtA4SXq7DG_x0A0PPfs92SWTkwZlVmtSKfbtOFy5tNldlNPnKkmWc_OPZaUKK4Q6cB2QUdJPGSGWb3-1Y2hUsb8w"
                  />
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  Joined by 10k+ creators this month
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-3xl opacity-30"></div>
              <div className="relative w-full aspect-[4/3] bg-gradient-to-br from-primary/5 to-primary/20 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-2xl">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Modern workspace with laptop and coffee"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuDsX7ASlU5-eXrzYZVTe95q3v_9YdegDoejzWCsAmiJJ3juX2SsK4YvoshHHniHlt3E54BILdki9XGfkkSQFarY4uKDTJDHHV1D1Pg0f84rcHpWTIADPw2BQtwI1WnVRyGG29RnThBP_P4pKK6nS1hoWg4FBenVXkZK6FtZSGTTlGCqJU_d_m7sj4XyvSQhVGe5EMleB9BGAQYYhvq6sKCKLKijYhckI-SDAmClW1wUuLpnQ38b2HxKN3PRUukGNThIr9GMZpiYk"
                />
                <div className="absolute bottom-6 left-6 right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg p-6 rounded-xl border border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-bold text-primary uppercase">
                      Draft saved
                    </p>
                    <p className="text-slate-900 dark:text-slate-100 font-bold">
                      "Building the future of SaaS..."
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary">
                    check_circle
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-20 py-20 bg-slate-100/50 dark:bg-slate-900/20">
          <div className="max-w-7xl mx-auto flex flex-col gap-12">
            <div className="flex items-end justify-between">
              <div className="flex flex-col gap-2">
                <h2 className="text-slate-900 dark:text-slate-100 text-3xl font-bold tracking-tight">
                  Featured Stories
                </h2>
                <p className="text-slate-600 dark:text-slate-400">
                  Hand-picked excellence from our creative community.
                </p>
              </div>
              <Link to={'/blogs'}
                className="text-primary font-bold flex items-center gap-1 hover:underline"
                href="#"
              >
                View all blogs{" "}
                <span className="material-symbols-outlined text-sm">
                  open_in_new
                </span>
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group flex flex-col gap-4 bg-background-light dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-alt="Futuristic technology background with blue light"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyauk37QNnt2n6tj-Voh3wrx03cyNO5jDoX4TfVI9gWZGb_6vJ9B1V9n28vYPujzC2N0GD1jPoM52PZbq8xkXuzCFeWuTAWxvbdSFW-4RigWU6MuExu-vkwl6eU9GbT23ZFSssdiIrfbYG_RAnsf70Rj_8SW9z6XopFA1gkW4U34_kqQXuTFSNOJsrcHlFMybQOIl3S0sTEJUT1hgUw27SHcJ7Aef4Yg9oH87Ca2ztDDzKO6DwGyf9YXal31yKz2Ip0qot7dXAHyw"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest backdrop-blur-sm">
                    Technology
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                    The Future of AI-Driven SaaS Platforms
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                    How artificial intelligence is reshaping the landscape of
                    software delivery and user experience in 2024.
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                      <img
                        data-alt="Portrait of Alex Rivera"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBw_eXn5RwTVsdgfn6Up8UpDvpPhjo1QHxybCkAJD7xaqj1N0GFaJcXKnKd4_m-6PsnXu5HsXmbCOaUcvfvHsd4aaVy1wBJDv_UXl10mJqHF_rYpuZajsSO3pLsTiXkAVSdwZ5Vo5eISx_PkU8EpAqi5fObE_SSqgns70u0Ngx2YGoL2Rahas2Vrk8IzR9tccBQdlWaMW-5qImkvHbkefONNWAUm95PNH8E3n24JNfaZSXr6ipf5H8saLbtbjMD823ecJg8K6dz8JE"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                        Alex Rivera
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">
                        Mar 12, 2024 • 8 min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group flex flex-col gap-4 bg-background-light dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-alt="Hand writing in a notebook with fountain pen"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_KzuWmSqA1-FYQWayp2tFcfziepfSihRoZ6cm35p7uglVOzHraQWPmIyfvnzJfzIHLcomNljcaIs0jAn882dwnvsGzpMP0m7_TXK9RFwvMtgJxxqYjfuA0jY_C7cvUaM5e8qODB4KnfNSeF-xriPHaJ13jvpLB5j8dwWVnHD8FS7mSHgeiM21DRWliwbkkiR4HqBLgnTHVfO2DMWhtExeazCTwFJ0Pju83bwRs-hnCSEFHjfIMW61gzwXyyAASjdSTprOsmzrp3Y"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest backdrop-blur-sm">
                    Creative
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                    Mastering the Art of Digital Storytelling
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                    Creative techniques to engage your readers and build a
                    lasting personal brand through your writing.
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                      <img
                        data-alt="Portrait of Sarah Chen"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgLEPXtLmDSLbvIUBhuzwAWwAsvHJUWCIL5ebpBJfurIxVodHGq0VK18yF74vjyp36bo9P4KSoVntvYOJVJNY2A2vObgsRjMNgSlxkduSbtBx7eABa8eCl7nMCXs-lLbKNDrQ7RZuzZ6I1dMIjLqrT4KtmcWmlCjnKK3-bEQu8ksMYgGTNXyhoz0ZJOEAUT00rf1Wpz41EjwTPVhotl_B0q5tGD8SVUSCsCfcQm1LV0LvMeiwco7flkLIZc5uS4y_rSwGovPrA6J0"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                        Sarah Chen
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">
                        Mar 10, 2024 • 5 min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group flex flex-col gap-4 bg-background-light dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 p-4 transition-all hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl">
                  <img
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    data-alt="Analytics charts and graphs on digital display"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeHk2IK_nJGzyc9svlPyTH_4Xg2AnFNuMAFu8xD0-HpRmql_eLeRUjErumAObYEieiZ1w3b1Tn5cDAIkuTQDqrafUv727uJa0PDUIJf7PDo_aZvZb949TCZ7-0Z6OOwEBVC0QGMH9BCbwyAF78sbdkpegM3Gw_jR5_p2QQIVp9oRWv19coHjYfEj4sQMp_NqoWHI04TrUbjKqiIqnlCw431_JVFw1Ue7y3TRp7n8i6jX02aihkF796ygPtIsPcyi7RjYP7UyCp_R8"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase tracking-widest backdrop-blur-sm">
                    Business
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-snug group-hover:text-primary transition-colors">
                    Growth Marketing for Solo Founders
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm line-clamp-2">
                    Actionable strategies to scale your blog traffic without a
                    massive marketing budget or team.
                  </p>
                  <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden">
                      <img
                        data-alt="Portrait of Mike Johnson"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwQp5uuR0SKr-ppYkso138j31l6fQV5oiHyBDGu6hT4l-b2nPCh0B-WCMnLlxnZFQGkQxUeIPoLjO3I0neCToHPqQrkjdcp7SUhAgJEfSne7ISr7j8n5AdRnnCm6jNOV5UWQRcxWiUZb23hcZCPnn-00sAP9khI_tHu7MkVmIat9arMKkKINrLfr2TO19FZHEJIMuWhdeq_qGwyE0uI4ZS_IjqghT3ORl_r66I7t85t8iesBoCsUsC8p00s9JabOsaZUrRVJgWOvA"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="text-slate-900 dark:text-slate-100 text-sm font-bold">
                        Mike Johnson
                      </p>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">
                        Mar 08, 2024 • 12 min read
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-20 py-24 max-w-7xl mx-auto">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-4 text-center items-center">
              <h2 className="text-slate-900 dark:text-slate-100 text-4xl lg:text-5xl font-black tracking-tight max-w-2xl">
                Everything you need to{" "}
                <span className="text-primary">grow</span> your audience
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-lg max-w-xl">
                Built for speed, discovery, and a seamless writing experience
                from day one.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900/40 p-8 transition-colors hover:border-primary/50">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    search
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                    SEO Optimized
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Automatic sitemaps, meta-tags, and industry-leading
                    performance to ensure you rank higher on search engines.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900/40 p-8 transition-colors hover:border-primary/50">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    public
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                    Global Reach
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Connect with readers from every corner of the globe with
                    built-in translation features and global CDN delivery.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-900/40 p-8 transition-colors hover:border-primary/50">
                <div className="bg-primary/10 text-primary w-12 h-12 rounded-xl flex items-center justify-center">
                  <span className="material-symbols-outlined text-2xl">
                    palette
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-slate-900 dark:text-slate-100 text-xl font-bold">
                    Custom Themes
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    Complete control over your blog's appearance. Use our visual
                    editor or write custom CSS to match your brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 lg:px-20 py-20">
          <div className="max-w-5xl mx-auto rounded-3xl bg-primary px-8 py-16 text-center text-white flex flex-col items-center gap-8 shadow-2xl shadow-primary/40">
            <h2 className="text-3xl lg:text-5xl font-black">
              Ready to start your journey?
            </h2>
            <p className="text-white/80 text-lg max-w-xl">
              Join thousands of writers who have already found their voice on
              BlogHub. Setup takes less than 2 minutes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              <input
                className="flex-1 rounded-xl px-5 py-4 text-slate-900 focus:ring-4 focus:ring-white/20 outline-none border-none"
                placeholder="Enter your email"
                type="email"
              />
              <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold px-8 py-4 rounded-xl transition-colors">
                Get Access
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
