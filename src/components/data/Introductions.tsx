"use client"
import {useEffect, useMemo, useRef, useState} from "react";
import CodeHighlight from "@/components/ui/CodeHighlight";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

type Course = { dept: string; number: string; name: string; reason: string }

export default function Introductions() {
    const [firstName, setFirstName] = useState("Alexander");
    const [preferredName, setPreferredName] = useState("Alex");
    const [middleInitial, setMiddleInitial] = useState("J");
    const [lastName, setLastName] = useState("Prechtel");
    const [divider, setDivider] = useState("~");
    const [mascot, setMascot] = useState("Advanced Pegasus");
    const [image, setImage] = useState("/headshot.jpeg")
    const [imageFilename, setImageFilename] = useState<string>(() => {
        const parts = "/headshot.jpeg".split("/")
        return parts[parts.length - 1] || "image"
    })
    const imageObjectUrlRef = useRef<string | null>(null)
    const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
        if (imageObjectUrlRef.current) {
            URL.revokeObjectURL(imageObjectUrlRef.current)
        }
        const url = URL.createObjectURL(file)
        imageObjectUrlRef.current = url
        setImage(url)
        setImageFilename(file.name)
    }
    useEffect(() => {
        return () => {
            if (imageObjectUrlRef.current) {
                URL.revokeObjectURL(imageObjectUrlRef.current)
            }
        }
    }, [])
    const [imageCaption, setImageCaption] = useState("At the beach on the eastern coast of Florida (2024)")
    const [personalBackground, setPersonalBackground] = useState("Grew up north of Charlotte, and have always had a love of computers.")
    const [personalStatement, setPersonalStatement] = useState("I’m a junior at UNC Charlotte studying Computer Science with a focus in Cybersecurity. I’m excited to collaborate and build secure, user‑friendly systems this semester.")
    const [professionalBackground, setProfessionalBackground] = useState("This is my first semester as an Instructional Assistant/Teachers Assistant, but before that I was a Peer Tutor for CCI.")
    const [academicBackground, setAcademicBackground] = useState("I’m currently a Junior at UNC Charlotte studying computer science with a focus in Cybersecurity. Before that I attended Highschool in Mooresville, North Carolina.")
    const [primaryComputer, setPrimaryComputer] = useState("The laptop I use for university is a Macbook Pro M2 14 inch. I also use a custom built Windows 11 computer.")
    const [courses, setCourses] = useState<Course[]>([
        {
            dept: "ITIS",
            number: "4250",
            name: "Computer Forensics",
            reason: "Required course for my concentration but the course’s subject also interests me."
        },
        {
            dept: "ITIS",
            number: "3246",
            name: "IT Infrastructure and Security",
            reason: "Another required course for my concentration but this is another class I am interested in."
        },
        {
            dept: "THEA",
            number: "1512",
            name: "Theatre in the United States",
            reason: "I needed to take one more theme course and this one was recommended to me by a friend who took it previously."
        },
        {
            dept: "MATH",
            number: "2164",
            name: "Matrices & Linear Algebra",
            reason: "Required course for the Computer Science degree."
        },
        {
            dept: "BIOL",
            number: "1110",
            name: "Principles of Biology I",
            reason: "I needed to take another science course and this was recommended to me by a friend."
        },
        {
            dept: "BIOL",
            number: "1110L",
            name: "Principles of Biology I Lab",
            reason: "I needed to take a science course with its lab."
        },
    ])
    // Dialog UI state for managing courses via modals
    const [isAddOpen, setIsAddOpen] = useState(false)
    const [isEditOpen, setIsEditOpen] = useState(false)
    const [isDeleteOpen, setIsDeleteOpen] = useState(false)
    const [draft, setDraft] = useState<Course>({ dept: "", number: "", name: "", reason: "" })
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const activeCourse = useMemo(() => (activeIndex == null ? null : courses[activeIndex] ?? null), [activeIndex, courses])
    const resetDraft = () => setDraft({ dept: "", number: "", name: "", reason: "" })

    // Compute JSON data and show it inline instead of downloading
    const inferredFilename = imageFilename || (image ? (image.split("/").pop() || "image") : "image")
    const data = {
        firstName,
        preferredName,
        middleInitial,
        lastName,
        divider,
        mascot,
        image: `images/${inferredFilename}`,
        imageCaption,
        personalBackground,
        professionalBackground,
        academicBackground,
        primaryComputer,
        courses,
    }

    const [showJson, setShowJson] = useState(false)
    const jsonSectionRef = useRef<HTMLDivElement | null>(null)
    const toggleShowJson = () => {
        setShowJson(prev => {
            const next = !prev
            if (!prev) {
                // If revealing the JSON, scroll into view on next paint
                requestAnimationFrame(() => {
                    jsonSectionRef.current?.scrollIntoView({behavior: "smooth", block: "start"})
                })
            }
            return next
        })
    }

    return <>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"}>
            <section>
                <h3>Form</h3>
                <form onSubmit={(e) => e.preventDefault()} className="my-6">
                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 sm:p-6 shadow-sm">
                        <div className="flex items-center justify-between mb-4 gap-2 flex-wrap">
                            <h4 className="text-lg font-semibold">Edit Introduction</h4>
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={toggleShowJson}
                                    className="inline-flex items-center gap-2 bg-neutral-800 hover:bg-neutral-900 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                                    aria-pressed={showJson}
                                    aria-label={showJson ? "Hide introduction JSON" : "Show introduction JSON"}
                                    title={showJson ? "Hide your introduction data" : "Show your introduction data as JSON"}
                                >
                                    {showJson ? "Hide JSON" : "Show JSON"}
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-5">
                            <div className="col-span-full grid grid-cols-4 gap-4">
                                <div className="flex flex-col gap-1 min-w-0">
                                    <label className="font-medium text-sm text-neutral-700" htmlFor="name">First
                                        Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                        placeholder="Your name"
                                        title="Enter your legal first name"
                                        className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 min-w-0">
                                    <label className="font-medium text-sm text-neutral-700" htmlFor="middle">Middle
                                        Initial</label>
                                    <input
                                        id="middle"
                                        type="text"
                                        value={middleInitial}
                                        onChange={(e) => setMiddleInitial(e.target.value)}
                                        placeholder="Your middle initial."
                                        title="Provide your middle initial, if applicable"
                                        className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 min-w-0">
                                    <label className="font-medium text-sm text-neutral-700" htmlFor="preferred">Preferred
                                        Name</label>
                                    <input
                                        id="preferred"
                                        type="text"
                                        value={preferredName}
                                        onChange={(e) => setPreferredName(e.target.value)}
                                        placeholder="Your preferred name."
                                        title="What you prefer to be called"
                                        className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-1 min-w-0">
                                    <label className="font-medium text-sm text-neutral-700" htmlFor="last">Last
                                        Name</label>
                                    <input
                                        id="last"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                        placeholder="Your last name."
                                        title="Enter your family/last name"
                                        className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>
                            <div className="col-span-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="font-medium text-sm text-neutral-700"
                                           htmlFor="mascot">Mascot</label>
                                    <input
                                        id="mascot"
                                        type="text"
                                        value={mascot}
                                        onChange={(e) => setMascot(e.target.value)}
                                        placeholder="Your mascot."
                                        title="Your chosen mascot for the course"
                                        className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="font-medium text-sm text-neutral-700"
                                           htmlFor="divider">Divider</label>
                                    <input
                                        id="divider"
                                        type="text"
                                        value={divider}
                                        onChange={(e) => setDivider(e.target.value)}
                                        placeholder="Divider"
                                        title="Symbol used to separate sections (e.g., ~ or |)"
                                        className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1 col-span-full">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="imageFile">Upload
                                    Image</label>
                                <input
                                    id="imageFile"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageFileChange}
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-neutral-200 hover:file:bg-neutral-300"
                                />
                                <p className="text-xs text-neutral-500">PNG, JPG, or GIF. Stays local in your
                                    browser.</p>
                            </div>

                            <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="imageCaption">Image
                                    Caption</label>
                                <input
                                    id="imageCaption"
                                    type="text"
                                    value={imageCaption}
                                    onChange={(e) => setImageCaption(e.target.value)}
                                    placeholder="Short description of the image"
                                    title="Describe the image for accessibility"
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="personalBackground">Personal
                                    Background</label>
                                <textarea
                                    id="personalBackground"
                                    value={personalBackground}
                                    onChange={(e) => setPersonalBackground(e.target.value)}
                                    placeholder="A few sentences about you"
                                    title="Share a bit about your personal background"
                                    rows={3}
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="personalStatement">Personal
                                    Statement</label>
                                <textarea
                                    id="personalStatement"
                                    value={personalStatement}
                                    onChange={(e) => setPersonalStatement(e.target.value)}
                                    placeholder="A brief personal statement or summary"
                                    title="Add a short personal statement to include in your intro"
                                    rows={3}
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                                <label className="font-medium text-sm text-neutral-700"
                                       htmlFor="professionalBackground">Professional
                                    Background</label>
                                <textarea
                                    id="professionalBackground"
                                    value={professionalBackground}
                                    onChange={(e) => setProfessionalBackground(e.target.value)}
                                    placeholder="Work experience or roles"
                                    title="Jobs, internships, roles, notable projects"
                                    rows={3}
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="academicBackground">Academic
                                    Background</label>
                                <textarea
                                    id="academicBackground"
                                    value={academicBackground}
                                    onChange={(e) => setAcademicBackground(e.target.value)}
                                    placeholder="Schools, major, focus, etc."
                                    title="Academic interests, research, concentrations, honors"
                                    rows={3}
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>

                            <div className="sm:col-span-2 xl:col-span-3 flex flex-col gap-1">
                                <label className="font-medium text-sm text-neutral-700" htmlFor="primaryComputer">Primary
                                    Computer</label>
                                <input
                                    id="primaryComputer"
                                    type="text"
                                    value={primaryComputer}
                                    onChange={(e) => setPrimaryComputer(e.target.value)}
                                    placeholder="Your main device(s)"
                                    title="Your primary computer(s) or devices"
                                    className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                        </div>

                        <hr className="my-4"/>

                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="text-base font-semibold">Courses</h4>
                                <button
                                    type="button"
                                    onClick={() => { resetDraft(); setActiveIndex(null); setIsAddOpen(true); }}
                                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                                    aria-label="Add course"
                                >
                                    + Add Course
                                </button>
                            </div>

                            {courses.length === 0 && (
                                <p className="text-sm text-neutral-600">No courses added. Use "Add Course" to include one.</p>
                            )}

                            <div className="flex flex-col gap-3 sm:gap-4">
                                {courses.map((c, idx) => (
                                    <div key={idx} className="border border-neutral-200 rounded-md p-3 sm:p-4 bg-white">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex-1">
                                                <div className="text-sm font-medium text-neutral-900">
                                                    {c.dept || "—"} {c.number || ""} {c.name ? `— ${c.name}` : ""}
                                                </div>
                                                <div className="text-sm text-neutral-700 mt-1">
                                                    {c.reason || <span className="text-neutral-400">No reason provided.</span>}
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <button
                                                    type="button"
                                                    onClick={() => { setActiveIndex(idx); setDraft({ ...c }); setIsEditOpen(true); }}
                                                    className="inline-flex items-center text-sm text-neutral-700 hover:bg-neutral-100 px-2 py-1 rounded-md"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => { setActiveIndex(idx); setIsDeleteOpen(true); }}
                                                    className="inline-flex items-center text-sm text-red-600 hover:bg-red-50 px-2 py-1 rounded-md"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </form>
            </section>

            <section>
                <h3>Example</h3>
                <div className="my-6 bg-neutral-50 border border-neutral-200 rounded-lg p-4 sm:p-6 shadow-sm">
                    <div className="space-y-4">
                        <p className="text-sm text-neutral-700">I understand that what I put here is publicly available
                            on the web and I won’t put anything here I don’t
                            want the public to see {divider} {[
                                firstName?.trim()?.[0],
                                (middleInitial || "").trim()?.[0],
                                lastName?.trim()?.[0]
                            ].filter(Boolean).join("")} {divider} {new Date().toLocaleDateString()}</p>
                        <h4 className="text-lg font-semibold">{firstName} {middleInitial}. &#34;{preferredName}&#34; {lastName} {divider} {mascot}</h4>
                        <figure className={"m-auto w-100"}>
                            {image === "" ? <img src={"/headshot.jpeg"} alt={imageCaption} width={500} height={500}/> :
                                <img src={image} alt={imageCaption} width={500} height={500}/>}
                            <figcaption className={"flex justify-center mt-2 text-sm text-neutral-600"}>
                                <em>{imageCaption}</em></figcaption>
                        </figure>
                        {personalStatement && (
                            <p>{personalStatement}</p>
                        )}
                        <ul className="list-disc pl-5 space-y-1">
                            <li><strong>Personal
                                Background: </strong>{personalBackground === "" ? "None." : personalBackground}
                            </li>
                            <li><strong>Professional
                                Background: </strong>{professionalBackground === "" ? "None." : professionalBackground}
                            </li>
                            <li><strong>Academic
                                Background: </strong>{academicBackground === "" ? "None." : academicBackground}
                            </li>
                            <li><strong>Primary Computer: </strong>{primaryComputer === "" ? "None." : primaryComputer}
                            </li>
                            <li>
                                <strong>Courses:</strong>
                                <ul className="list-disc pl-5 mt-1 space-y-1">
                                    {courses.length === 0 ? <li>No courses.</li> : courses.map(({
                                                                                                  dept,
                                                                                                  number,
                                                                                                  name,
                                                                                                  reason
                                                                                              }, index) => <li
                                        key={index}><strong>{dept} {number} &mdash; {name}</strong>: {reason}</li>)}
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        {/* Add Course Dialog */}
        <Dialog open={isAddOpen} onOpenChange={setIsAddOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Course</DialogTitle>
                    <DialogDescription>Enter the course details below.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start mt-2">
                    <div className="md:col-span-2 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`add-dept`}>Prefix</label>
                        <input
                            id={`add-dept`}
                            type="text"
                            value={draft.dept}
                            onChange={(e) => setDraft(prev => ({...prev, dept: e.target.value}))}
                            placeholder="ITIS"
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`add-number`}>Number</label>
                        <input
                            id={`add-number`}
                            type="text"
                            value={draft.number}
                            onChange={(e) => setDraft(prev => ({...prev, number: e.target.value}))}
                            placeholder="3135"
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="md:col-span-8 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`add-name`}>Name</label>
                        <input
                            id={`add-name`}
                            type="text"
                            value={draft.name}
                            onChange={(e) => setDraft(prev => ({...prev, name: e.target.value}))}
                            placeholder="Course name"
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="md:col-span-12 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`add-reason`}>Reason</label>
                        <textarea
                            id={`add-reason`}
                            value={draft.reason}
                            onChange={(e) => setDraft(prev => ({...prev, reason: e.target.value}))}
                            placeholder="Why you're taking the course..."
                            rows={4}
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-24"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <button
                        type="button"
                        onClick={() => setIsAddOpen(false)}
                        className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-800 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            const toAdd: Course = { ...draft };
                            setCourses(prev => [...prev, toAdd]);
                            setIsAddOpen(false);
                            resetDraft();
                        }}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                    >
                        Add
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

        {/* Edit Course Dialog */}
        <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Course</DialogTitle>
                    <DialogDescription>Update the course details below.</DialogDescription>
                </DialogHeader>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-start mt-2">
                    <div className="md:col-span-2 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`edit-dept`}>Prefix</label>
                        <input
                            id={`edit-dept`}
                            type="text"
                            value={draft.dept}
                            onChange={(e) => setDraft(prev => ({...prev, dept: e.target.value}))}
                            placeholder="ITIS"
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`edit-number`}>Number</label>
                        <input
                            id={`edit-number`}
                            type="text"
                            value={draft.number}
                            onChange={(e) => setDraft(prev => ({...prev, number: e.target.value}))}
                            placeholder="3135"
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="md:col-span-8 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`edit-name`}>Name</label>
                        <input
                            id={`edit-name`}
                            type="text"
                            value={draft.name}
                            onChange={(e) => setDraft(prev => ({...prev, name: e.target.value}))}
                            placeholder="Course name"
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div className="md:col-span-12 flex flex-col gap-1">
                        <label className="font-medium text-sm text-neutral-700" htmlFor={`edit-reason`}>Reason</label>
                        <textarea
                            id={`edit-reason`}
                            value={draft.reason}
                            onChange={(e) => setDraft(prev => ({...prev, reason: e.target.value}))}
                            placeholder="Why you're taking the course..."
                            rows={4}
                            className="border border-neutral-300 rounded-md px-3 py-2 bg-white placeholder-neutral-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-24"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <button
                        type="button"
                        onClick={() => setIsEditOpen(false)}
                        className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-800 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            if (activeIndex == null) return setIsEditOpen(false);
                            const updated: Course = { ...draft };
                            setCourses(prev => prev.map((c, i) => i === activeIndex ? updated : c));
                            setIsEditOpen(false);
                            resetDraft();
                            setActiveIndex(null);
                        }}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                    >
                        Save
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

        {/* Delete Course Confirm Dialog */}
        <Dialog open={isDeleteOpen} onOpenChange={setIsDeleteOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Delete course?</DialogTitle>
                    <DialogDescription>
                        {activeCourse ? `Remove ${activeCourse.dept} ${activeCourse.number} — ${activeCourse.name}?` : "Remove this course?"}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <button
                        type="button"
                        onClick={() => setIsDeleteOpen(false)}
                        className="inline-flex items-center gap-2 border border-neutral-300 text-neutral-800 text-sm font-medium px-3 py-1.5 rounded-md hover:bg-neutral-100"
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            if (activeIndex == null) return setIsDeleteOpen(false);
                            setCourses(prev => prev.filter((_, i) => i !== activeIndex));
                            setIsDeleteOpen(false);
                            setActiveIndex(null);
                        }}
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-3 py-1.5 rounded-md"
                    >
                        Delete
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
        {showJson && (
            <section ref={jsonSectionRef}>
                <h2>JSON</h2>
                <p className="text-sm text-neutral-600 mt-2">Copy this JSON into your site repository as needed.</p>
                <CodeHighlight>
                    {JSON.stringify(data, null, 2)}
                </CodeHighlight>
            </section>
        )}
    </>
}
