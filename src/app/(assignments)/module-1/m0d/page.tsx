import type {Metadata} from "next";
import Warning from "@/components/feedback/Warning";
import CodeHighlight from "@/components/ui/CodeHighlight";


export const metadata: Metadata = {
    title: "Assignment M0d - Setup University Webspace",
    description: "Please follow all instructions before continuing to the next step.",
};

export default function M0d() {


    return <>
        <section>
            <h2>Setup your computer</h2>
            <ol>
                <li>Enable showing file extensions on your system.
                    <ul>
                        <li>Windows Instructions:
                            <ol>
                                <li>Open File Explorer (Shortcut: <code>WIN + E</code>)</li>
                                <li>Click <code>View</code></li>
                                <li>Hover over <code>Show</code></li>
                                <li>Click <code>File name Extensions</code></li>
                            </ol>
                        </li>
                        <li>MacOS Instructions:
                            <ol>
                                <li>Open Finder</li>
                                <li>Click Finder on the Menu Bar (Top Left)</li>
                                <li>Click Settings (Shortcut: <code>CMD + ,</code>)</li>
                                <li>Navigate to <code>Advanced</code></li>
                                <li>Enable <code>Show all filename extensions</code></li>
                            </ol>

                        </li>
                    </ul>
                </li>
                <li>Install a Code Editor of your choosing.
                    <blockquote>We recommend using Visual Studio Code (VS Code) which can be downloaded <a
                        href="https://code.visualstudio.com/" target="_blank">here</a>.<br/> If you install Visual
                        Studio
                        Code please download the <a
                            target="_blank"
                            href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live
                            Server
                            Extension</a> from the Extensions
                        Marketplace
                    </blockquote>
                </li>
                <li>Install an FTP <strong>Client</strong>
                    <blockquote>We recommend using FileZilla, which can be downloaded <a
                        target="_blank"
                        href="https://filezilla-project.org/">here</a>.
                    </blockquote>
                </li>
                <li>Install the University&#39;s VPN Client
                    <br/>
                    <blockquote>
                        You can download the VPN from <a target="_blank" href="https://vpn.charlotte.edu">here</a>
                        <br/><strong>Login:</strong>
                        <ul>
                            <li>Username: <strong>Niner_Net_username</strong>@charlotte.edu</li>
                            <li>Password: <strong>Niner_Net_password</strong></li>
                        </ul>
                        <strong>Note: </strong>Replace the bolded parts with your university provided login
                    </blockquote>
                </li>
                <li>Install GitHub Desktop
                    <blockquote>You can download GitHub Desktop from <a target="_blank"
                                                                        href="https://desktop.github.com/download/">here</a>.<br/>
                        <strong>Note:</strong> You do not need to use GitHub Desktop and may use another Git Client
                        or use
                        the Git CLI. We
                        recommend it as not everyone is familiar with git and CLI tools. But Instructions will
                        assume that
                        you installed it.
                    </blockquote>
                </li>
            </ol>
        </section>
        <hr/>
        <section>
            <h2>Setup GitHub</h2>
            <ol>
                <li>Go to <a target="_blank" href="https://github.com/">GitHub.com</a> and sign in or sign up for an
                    account.
                </li>
                <li>Navigate to the create repository button and create a repository.</li>
                <li>Name the repository as follows: <strong>YOUR_GITHUB_USERNAME</strong>.github.io
                    <Warning msg={"If you do not name your repository exactly like that your webpage will not work."}/>
                    <blockquote>
                        <strong>Example:</strong> My GitHub username is <strong>alexandernc0043</strong> so my repository should be named <code>alexandernc0043.github.io</code>
                    </blockquote>
                </li>
                <li>Open GitHub Desktop and clone your repository.</li>
                <li>Open your cloned repository in Visual Studio Code by clicking the button inside GitHub Desktop</li>
            </ol>
        </section>
        <hr/>
        <section>
            <h2>Creating your first webpage.</h2>
            <ol>
                <li>Inside Visual Studio Code create a new file called <code>index.html</code>.</li>
                <li>Using Visual Studio Code&#39;s Emmett tool type an <code>!</code> and hit Tab or Enter on your
                    keyboard.
                </li>
                <li>Your file should look like this now:<br/>
                    <CodeHighlight>
                        {'<!-- USERNAME.github.io/index.html -->\n' +
                            '<!DOCTYPE html>\n' +
                            '<html lang="en">\n' +
                            '<head>\n' +
                            '  <meta charset="UTF-8">\n' +
                            '  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
                            '  <title>Document</title>\n' +
                            '</head>\n' +
                            '<body>\n' +
                            '</body>\n' +
                            '</html>'}
                    </CodeHighlight>
                </li>
                <li>Edit your title by editing the word <code>Document</code> inside this
                    element <code>{'<title>Document</title>'}</code> with [YOUR_NAME] [Divider]
                    Homepage
                    <blockquote>
                        <strong>Example(s):</strong>
                        <CodeHighlight>{'<title>Alexander Prechtel | Homepage</title>\n' + '<title>Alexander Prechtel ~ Homepage</title>\n' + '<title>Alexander Prechtel - Homepage</title>'}</CodeHighlight>
                    </blockquote>
                </li>
                <li>
                    Inside your <code>body</code> element add a Heading 1 element (<code>h1</code>) and put the
                    following:
                    <CodeHighlight>
                        {'<body>\n' +
                            '\t<h1>Welcome to my homepage!</h1>\n' +
                            '</body>'}
                    </CodeHighlight>

                </li>
                <li>
                    Now add an anchor element ( <code>a</code> ) after your heading 1 element that will take you to your
                    course page.
                    <CodeHighlight>{'<a href="itis3135">Click here to go to my ITIS-3135 course page!</a>'}</CodeHighlight>
                    <blockquote>Your body should now look like this:
                        <CodeHighlight>
                            {'<!-- USERNAME.github.io/index.html -->\n' +
                                '<body>\n' +
                                '\t<h1>Welcome to my homepage!</h1>\n' +
                                '\t<a href="itis3135">Click here to go to my ITIS-3135 coursepage!</a>\n' +
                                '</body>'}
                        </CodeHighlight>
                    </blockquote>
                </li>
            </ol>
        </section>
        <hr/>
        <section>
            <h2>Creating your course page</h2>
            <ol>
                <li>
                    Inside your GITHUB_USER_NAME.github.io folder create a folder named <code>itis3135</code>
                    <br/>
                    <blockquote>
                        <strong>Note:</strong> in the future your GITHUB_USER_NAME.github.io folder will be referred to
                        as
                        the &#34;root&#34; of
                        your website
                    </blockquote>
                </li>
                <li>Inside your <code>itis3135</code> folder create a new file called <code>index.html</code>
                </li>
                <li>
                    Open your newly created <code>index.html</code> file inside your <code>itis3135</code> folder.
                </li>
                <li>
                    Copy the contents <code>index.html</code> inside the root of your website and paste it into
                    your newly created <code>index.html</code> file inside your <code>itis3135</code> folder.
                </li>
                <li>
                    Remove the anchor element (<code>a</code>)
                </li>
                <li>
                    Replace everywhere you have <code>homepage</code> with <code>ITIS-3135 course page</code>
                    <blockquote> Your new <code>index.html</code> file should look like this now:

                        <CodeHighlight>
                            {'<!-- USERNAME.github.io/itis3135/index.html -->\n' +
                                '<!DOCTYPE html>\n' +
                                '<html lang="en">\n' +
                                '<head>\n' +
                                '\t<meta charset="UTF-8">\n' +
                                '\t<meta name="viewport" content="width=device-width, initial-scale=1.0">\n' +
                                '\t<title>Alexander Prechtel | ITIS-3135 Course page</title>\n' +
                                '</head>\n' +
                                '<body>\n' +
                                '\t<h1>Welcome to my ITIS-3135 course page!</h1>\n' +
                                '</body>\n' +
                                '</html>'}
                        </CodeHighlight>

                    </blockquote>
                </li>
                <li>
                    Now inside the ITIS-3135 folder create 6 new folders with the names:
                    <ol>
                        <li>
                            images
                        </li>
                        <li>
                            components
                        </li>
                        <li>
                            scripts
                        </li>
                        <li>
                            styles
                        </li>
                        <li>
                            project
                        </li>
                        <li>
                            archives
                        </li>
                    </ol>
                    <blockquote><strong>Note:</strong> GitHub won&apos;t track folders with no files inside. You can add
                        a
                        README.md file if you want
                        to have it be tracked but that&apos;s not required.
                    </blockquote>
                </li>

            </ol>
        </section>
        <hr/>
        <section>
            <h2>Creating your UNCC webspace</h2>
            <ol>
                <li>
                    Request your UNCC Webspace by visiting <a
                    target="_blank"
                    href="https://webpages.charlotte.edu">webpages.charlotte.edu</a> and signing in with your NinerNet
                    account and clicking request account.
                    <blockquote><strong>Note:</strong> This can take up to 10 minutes to provision.</blockquote>
                </li>
                <li>
                    After waiting some time visit webpages.charlotte.edu/<strong>YOUR_NINER_NET_USERNAME</strong>/, and
                    you
                    should see a template website saying it&apos;s created.
                    <br/>
                    <blockquote><strong>Example:</strong> <a href="https://webpages.charlotte.edu/aprechte"
                                                             target={"_blank"}>https://webpages.charlotte.edu/aprechte</a>
                    </blockquote>
                </li>
                <li>
                    Use FileZilla to transfer your files to your university webspace.
                    <blockquote>
                        <strong>Note:</strong> If you are off campus you will need to use the Cisco Secure VPN you
                        installed
                        in previous steps. Inside the box when opening Cisco Secure Client you will
                        type <strong>vpn.charlotte.edu</strong>
                        then Login with your NinerNet account details.
                    </blockquote>
                    <ol>
                        <li>
                            Connecting to the university webpage SFTP server.
                            <blockquote>
                                <strong>Host:</strong> webpages.charlotte.edu<br/>
                                <strong>Username:</strong> YOUR_NINER_NET_USERNAME <strong>DO NOT INCLUDE
                                @charlotte.edu</strong><br/>
                                <strong>Password:</strong> YOUR_NINER_NET_PASSWORD<br/>
                                <strong>Port:</strong> 22 <br/><br/>
                                Once you are connected you should see your computer&apos;s files on the left and the
                                server&apos;s
                                on the right
                            </blockquote>
                        </li>
                        <li>
                            On the server side open the <code>public_html</code> folder.
                        </li>
                        <li>
                            Now navigate to your GITHUB_USER_NAME.github.io folder on your computer.
                        </li>
                        <li>
                            Once you have located your folder drag the <code>publc_html/index.html</code> folder on the
                            server side
                            inside your <code>root/itis3135/archive</code> folder
                        </li>
                        <li>
                            After you have done that move your <code>index.html</code> in the root of your website and
                            <code>itis3135</code> folder into the <code>public_html</code> folder on the server side.
                        </li>
                    </ol>
                </li>
                <li>
                    After you have successfully set up your university webspace go to GitHub Desktop and commit your
                    changes
                    <ol>
                        <li>
                            First type in a summary message of what you changed/add/updated
                        </li>
                        <li>
                            Click commit # files
                        </li>
                        <li>
                            Click push origin
                        </li>
                    </ol>
                </li>
            </ol>
        </section>
        <hr/>
        <section>
            <h2>Frequently Asked Questions</h2>
            <ul>
                <li>Office of OneIT Resources
                    <ul>
                        <li>
                            <a target="_blank"
                               href="https://services.help.charlotte.edu/TDClient/33/Portal/KB/?CategoryID=26">Personal
                                Webpages Guide</a>
                        </li>
                        <li><a target="_blank"
                               href="https://services.help.charlotte.edu/TDClient/33/Portal/KB/ArticleDet?ID=677">How do
                            I
                            login to VPN?</a>
                        </li>
                    </ul>
                </li>
                <li>GitHub Resources
                    <ul>
                        <li>
                            <a target="_blank"
                               href="https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories">How
                                do I create a repository</a>
                        </li>
                        <li>
                            <a href="https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-and-forking-repositories-from-github-desktop"
                               target="_blank">How
                                do I clone a repository on GitHub Desktop</a>
                        </li>
                        <li>
                            <a href="https://docs.github.com/en/desktop/making-changes-in-a-branch/committing-and-reviewing-changes-to-your-project-in-github-desktop"
                               target="_blank">
                                How do I review and commit my changes
                            </a>
                        </li>
                        <li>
                            <a href="https://docs.github.com/en/desktop/making-changes-in-a-branch/pushing-changes-to-github-from-github-desktop"
                               target="_blank">How do I push my changes</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </section>
        <hr/>
        <section>
            <h2>Submission</h2>
            <blockquote>
                Please submit the following<br/>
                <strong>Note:</strong> your university webpage and GitHub webpage should/need to be identical.
            </blockquote>
            <ul>
                <li>
                    A screenshot of the entire FileZilla application showing your computer&apos;s files and
                    server&apos;s
                    files.
                </li>
                <li>
                    The URL for your UNCC webpage&apos;s itis3135 page.
                    <blockquote>
                        <strong>Example:</strong> <a target="_blank"
                                                     href="https://webpages.charlotte.edu/aprechte/itis3135/">https://webpages.charlotte.edu/aprechte/itis3135/</a>
                    </blockquote>
                </li>
                <li>
                    The URL for your GitHub <strong>repository</strong>.
                    <blockquote>
                        <strong>Example:</strong> <a target="_blank"
                                                     href="https://github.com/alexandernc0043/alexandernc0043.github.io">https://github.com/alexandernc0043/alexandernc0043.github.io</a>
                    </blockquote>
                </li>
            </ul>
        </section>
    </>
}
