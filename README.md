Unity-Webapps-Feedly
===================

<h2>Feedly integration with Ubuntu Unity desktop. (www.feedly.com)</h2>

<p>Feedly is a news aggregator application for various Web browsers and mobile devices running iOS and Android. It compiles news feeds from a variety of online sources for the user to customize and share with others. First Released by DevHD in 2008, Feedly has had mostly positive reviews. <cite>Wikipedia</cite></p>

<p>For more information about Ubuntu Unity Web apps see this: http://developer.ubuntu.com/resources/technologies/webapps/</p>

<p>Remember, this only work in Ubuntu with Firefox or Chromium. Webapps doesn't work with Google Chrome or Opera yet.</p>

<p>As featured on OMG Ubuntu <a href="http://www.omgubuntu.co.uk/2013/05/unity-webapp-for-feedly" target="_blank" title="Check it on OMG Ubuntu">www.omgubuntu.co.uk/</a></p>
<img src="http://www.omgubuntu.co.uk/wp-content/uploads/2013/05/unity-web-app-feedly.jpg">

<p>This is the source code to compile in .deb file and install in Ubuntu</p>

<h4>Changelog:</h4>
<ul>
<li><strong>1.1</strong> Messaging Menu integration and bubble in launcher icon;</li>
<li><strong>1.0</strong> Basic webapp integration (launcher icon, dashboard search and alt+tab);</li>
</ul>

<h4>Installing:</h4>

<ol>
<li>Clone thie repository (or download .zip file);</li>
<li>Open terminal and browse to that folder;</li>
<li>Build the package with dpkg-buildpackage;</li>
<li>Install the .deb file</li>
</ol>

<h4>Step by Step Install:</h4>
<ol>
	<li>Open Terminal (Ctrl+Alt+T is the default keyboard hotkey)</li>
	<li>Select and go to one directory (cd /home/[user]/dev/)</li>
	<li>Download the source from Github (git clone git@github.com:eudennis/unity-webapps-feedly.git)</li>
	<li>Open the source folder (cd unity-webapps-feedly)</li>
	<li>You need to install some packages to build it (sudo apt-get install build-essential autoconf automake autotools-dev dh-make debhelper devscripts fakeroot xutils lintian pbuilder)</li>
	<li>Build it (dpkg-buildpackage -rfakeroot)</li>
	<li>Now open the .deb file that was created (cd nautilus /home/[user]/dev/)</li>
	<li>Once installed, it's done. You should see an popup notify the first time that you open the Feedly website</li>
</ol>
