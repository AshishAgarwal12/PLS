// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { ChevronDown, ChevronRight } from 'lucide-react'
// import { useState } from 'react'

// export default function Header() {
//   const [isStaffingHovered, setIsStaffingHovered] = useState(false)
//   return (
//     <header className="border-b border-gray-200">
//       <div className="container mx-auto px-4">
//         {/* Top utility bar */}
//         <div className="flex justify-end gap-4 py-2 text-xs">
//           <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
//             PRICING
//           </Link>
//           <Link href="/contact" className="text-gray-600 hover:text-gray-900">
//             CONTACT
//           </Link>
//           <span className="text-gray-300">|</span>
//           <Link href="/personal-checks" className="text-green-600 hover:text-green-700 font-medium">
//             PERSONAL CHECKS
//           </Link>
//         </div>

//         {/* Main navigation */}
//         <div className="flex items-center justify-between py-4 ">
//           <Link href="/" className="flex-shrink-0">
//             <Image 
//               src= "/assets/footerImages/comp.png" 
//               alt="GoodHire Logo" 
//               width={180} 
//               height={50}
//               className="h-8 w-auto"
//             />
//           </Link>

//           <nav className="hidden lg:flex items-center gap-6">
//             <div className="relative group">
//               <button
//                 className="flex items-center gap-1 text-gray-700 hover:text-gray-900 py-2"
//               >
//                 PRODUCT
//                 <ChevronDown className="h-4 w-4" />
//               </button>
              
//               <div className="absolute top-full  w-[1200px] bg-white left-0 shadow-lg p-8  grid grid-cols-[1fr,200px,1fr] gap-8 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                   <div className="flex items-start gap-6">
//                     <Image src="/assets/footerImages/comp2.png" alt="" width={200} height={100} className="rounded" />
//                     <div className="flex-1">
//                       <h3 className="font-semibold mb-2 text-gray-900">BACKGROUND CHECKS</h3>
//                       <p className="text-sm text-gray-600 mb-4">
//                         Manage your employment screening program easily and more efficiently with GoodHire's award-winning advanced platform.
//                       </p>
//                       <h4 className="font-semibold mb-2 text-gray-900">BY INDUSTRY</h4>
//                       <ul className="space-y-2 text-sm">
//                       <li 
//                           className="relative"
//                           onMouseEnter={() => setIsStaffingHovered(true)}
//                           onMouseLeave={() => setIsStaffingHovered(false)}
//                         >
//                           <Link href="/industry/staffing" className="text-gray-600 hover:text-green-600 flex items-center justify-between">
//                             Staffing
//                             <ChevronRight className="h-4 w-4" />
//                           </Link>
//                           {isStaffingHovered && (
//                             <div className="absolute left-full top-0 bg-white shadow-lg p-4 w-64 ml-2">
//                               <h5 className="font-semibold mb-2 text-gray-900">Staffing Solutions</h5>
//                               <ul className="space-y-2">
//                                 <li><Link href="/staffing/temp" className="text-gray-600 hover:text-green-600">Temporary Staffing</Link></li>
//                                 <li><Link href="/staffing/permanent" className="text-gray-600 hover:text-green-600">Permanent Placement</Link></li>
//                                 <li><Link href="/staffing/contract" className="text-gray-600 hover:text-green-600">Contract Staffing</Link></li>
//                                 <li><Link href="/staffing/executive" className="text-gray-600 hover:text-green-600">Executive Search</Link></li>
//                               </ul>
//                             </div>
//                           )}
//                         </li>
//                         <li><Link href="/industry/healthcare" className="text-gray-600 hover:text-green-600">Healthcare</Link></li>
//                         <li><Link href="/industry/nonprofits" className="text-gray-600 hover:text-green-600">Nonprofits</Link></li>
//                         <li><Link href="/industry/small-businesses" className="text-gray-600 hover:text-green-600">For Small Businesses</Link></li>
//                         <li><Link href="/industry/large-organizations" className="text-gray-600 hover:text-green-600">For Large Organizations</Link></li>
//                         <li><Link href="/industries" className="text-green-600 hover:text-green-700">View All Industries</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div>
//                     <div>
//                         <h4 className="font-semibold mb-2 text-gray-900">BY STATE</h4>
//                         <ul className="space-y-2 text-sm">
//                           <li><Link href="/state/california" className="text-gray-600 hover:text-green-600">California</Link></li>
//                           <li><Link href="/state/florida" className="text-gray-600 hover:text-green-600">Florida</Link></li>
//                           <li><Link href="/state/illinois" className="text-gray-600 hover:text-green-600">Illinois</Link></li>
//                           <li><Link href="/state/new-york" className="text-gray-600 hover:text-green-600">New York</Link></li>
//                           <li><Link href="/state/texas" className="text-gray-600 hover:text-green-600">Texas</Link></li>
//                           <li><Link href="/states" className="text-green-600 hover:text-green-700">View All States</Link></li>
//                         </ul>
//                     </div>
//                   </div>
//                   <div >
//                     <div>
//                       <h3 className="font-semibold mb-2 text-gray-900 gap-30">SCREENING SERVICES</h3>
//                       <p className="text-sm text-gray-600 mb-4">
//                         Learn about the 100+ employment screening services <br/>available through the GoodHire platform.
//                       </p>
//                       <ul className="space-y-2 text-sm">
//                         <li><Link href="/services/background-checks" className="text-gray-600 hover:text-green-600">Background Checks</Link></li>
//                         <li><Link href="/services/criminal" className="text-gray-600 hover:text-green-600">Criminal Background Checks</Link></li>
//                         <li><Link href="/services/driving" className="text-gray-600 hover:text-green-600">Driving Record (MVR) Checks</Link></li>
//                         <li><Link href="/services/drug-tests" className="text-gray-600 hover:text-green-600">Employment Drug Tests</Link></li>
//                         <li><Link href="/services/education" className="text-gray-600 hover:text-green-600">Education Verification Check</Link></li>
//                         <li><Link href="/services/employment" className="text-gray-600 hover:text-green-600">Employment Verification</Link></li>
//                         <li><Link href="/services" className="text-green-600 hover:text-green-700">View All Screening Services</Link></li>
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//             </div>
            
//             <div className="relative group">
//               <button
//                 className="flex items-center gap-1 text-gray-700 hover:text-green-600 py-2"
//               >
//                 RESOURCES
//                 <ChevronDown className="h-4 w-4" />
//               </button>
              
//               <div className="absolute top-full left-0 w-[800px] bg-white shadow-lg p-8 grid grid-cols-2 gap-8 z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                   <div>
//                     <h3 className="font-semibold mb-4 text-gray-900">Learn</h3>
//                     <p className="text-sm text-gray-600 mb-4">
//                       Get answers to common background check questions and learn how to run a compliant screening program.
//                     </p>
//                     <ul className="space-y-2 text-sm">
//                       <li><Link href="/learn/background-check-time" className="text-gray-600 hover:text-green-600">How Long Does a Background Check Take?</Link></li>
//                       <li><Link href="/learn/failed-background-checks" className="text-gray-600 hover:text-green-600">What Are "Failed" Background Checks?</Link></li>
//                       <li><Link href="/learn/ssn-trace" className="text-gray-600 hover:text-green-600">What Is An SSN Trace?</Link></li>
//                       <li><Link href="/learn/federal-background-checks" className="text-gray-600 hover:text-green-600">Guide to Federal Background Checks</Link></li>
//                       <li><Link href="/learn/run-background-check" className="text-gray-600 hover:text-green-600">How To Run A Background Check For Employment</Link></li>
//                       <li><Link href="/learn/articles" className="text-green-600 hover:text-green-700">View All Articles</Link></li>
//                     </ul>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-4 text-gray-900">Content</h3>
//                     <p className="text-sm text-gray-600 mb-4">
//                       Access our full library of content to learn about hiring trends, screening compliance, and how GoodHire works.
//                     </p>
//                     <ul className="space-y-2 text-sm">
//                       <li><Link href="/content/resource-library" className="text-gray-600 hover:text-green-600">Resource Library</Link></li>
//                       <li><Link href="/content/customer-stories" className="text-gray-600 hover:text-green-600">Customer Stories</Link></li>
//                       <li><Link href="/content/blog" className="text-gray-600 hover:text-green-600">Blog</Link></li>
//                       <li><Link href="/content/fcra-compliance" className="text-gray-600 hover:text-green-600">FCRA Compliance</Link></li>
//                     </ul>
//                   </div>
//                 </div>
//             </div>
            
//             <Link href="/about" className="text-gray-700 hover:text-green-600 transition-colors duration-300">
//               ABOUT
//             </Link>
//           </nav>

//           <div className="flex items-center gap-4">
//             <Link
//               href="/get-started"
//               className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-sm font-medium"
//             >
//               GET STARTED
//             </Link>
//             <Link
//               href="/quote"
//               className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-2 rounded transition-colors text-sm font-medium"
//             >
//               GET A QUOTE
//             </Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   )
// }
'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import menuData from './dropdown-menu' // Assuming the menuData is properly exported

// Define TypeScript interfaces for menuData
interface SubItem {
  name: string
  subItems: string[]
}

interface MenuData {
  Services: SubItem[]
  Industries: SubItem[]
  Technologies: SubItem[]
  Product: string[]
  Portfolio: string[]
}

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [hoveredSubMenu, setHoveredSubMenu] = useState<string | null>(null)

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto px-4">
        {/* Top utility bar */}
        <div className="flex justify-end gap-4 py-2 text-xs">
          <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
            PRICING
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-gray-900">
            CONTACT
          </Link>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/assets/footerImages/comp.png"
              alt="Company Logo"
              width={180}
              height={50}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {Object.keys(menuData).map((menu) => (
              <div
                key={menu}
                className="relative group"
                onMouseEnter={() => setHoveredMenu(menu)}
                onMouseLeave={() => {
                  setHoveredMenu(null)
                  setHoveredSubMenu(null)
                }}
              >
                <button className="flex items-center gap-1 text-gray-700 hover:text-green-600 py-2">
                  {menu.toUpperCase()}
                  <ChevronDown className="h-4 w-4" />
                </button>

                {hoveredMenu === menu && (
                  <div className="absolute top-full left-0 w-[1200px] bg-white shadow-lg p-8 z-10 grid grid-cols-[300px,1fr,1fr,1fr] gap-8">
                    {/* Image Column */}
                    <div className="flex flex-col items-start">
                      <Image
                        src="/assets/img1.png" // Replace with a relevant image path
                        alt={`${menu} Image`}
                        width={250}
                        height={150}
                        className="rounded shadow-md"
                      />
                      <p className="text-sm text-gray-500 mt-4">
                        Explore more about {menu.toLowerCase()} and discover our offerings.
                      </p>
                    </div>

                    {/* Content Columns */}
                    {Array.isArray(menuData[menu as keyof MenuData]) && (
                      <>
                        <div>
                          {(menuData[menu as keyof MenuData] as (string | SubItem)[]).slice(0, Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length / 3)).map((item) =>
                            renderMenuItem(item, menu)
                          )}
                        </div>
                        <div>
                          {(menuData[menu as keyof MenuData] as (string | SubItem)[]).slice(Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length / 3), Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length * 2 / 3)).map((item) =>
                            renderMenuItem(item, menu)
                          )}
                        </div>
                        <div>
                          {(menuData[menu as keyof MenuData] as (string | SubItem)[]).slice(Math.ceil((menuData[menu as keyof MenuData] as (string | SubItem)[]).length * 2 / 3)).map((item) =>
                            renderMenuItem(item, menu)
                          )}
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/get-started"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors text-sm font-medium"
            >
              GET STARTED
            </Link>
            <Link
              href="/quote"
              className="border border-green-500 text-green-500 hover:bg-green-50 px-6 py-2 rounded transition-colors text-sm font-medium"
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </header>
  )

  function renderMenuItem(item: string | SubItem, menu: string) {
    if (typeof item === 'string') {
      return (
        <Link
          key={item}
          href={`/${menu.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="block text-gray-600 hover:text-green-600 py-1"
        >
          {item}
        </Link>
      )
    } else {
      return (
        <div
          key={item.name}
          className="relative group"
          onMouseEnter={() => setHoveredSubMenu(item.name)}
          onMouseLeave={() => setHoveredSubMenu(null)}
        >
          <button className="flex items-center gap-2 text-gray-600 hover:text-green-600 py-1">
            {item.name}
            <ChevronRight className="h-4 w-4" />
          </button>

          {hoveredSubMenu === item.name && (
            <div className="absolute top-0 left-full w-[400px] bg-white shadow-lg p-4 z-10">
              <ul className="space-y-2 text-sm">
                {item.subItems.map((subItem) => (
                  <li key={subItem}>
                    <Link
                      href={`/${menu.toLowerCase()}/${item.name
                        .toLowerCase()
                        .replace(/\s+/g, '-')}/${subItem
                        .toLowerCase()
                        .replace(/\s+/g, '-')}`}
                      className="block text-gray-600 hover:text-green-600"
                    >
                      {subItem}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )
    }
  }
}

