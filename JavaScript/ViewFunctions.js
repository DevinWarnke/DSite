/*

Array.prototype.forEach.call(document.getElementsByClassName(""), function(elmnt) {
	elmnt.innerHTML = ;
});

document.getElementsByClassName("")[0]

document.getElementById("")

*/

function FixStuff() {
	// --------------------------- Universal -----------------------------
	
	var Header = $(".Header")
	
	textFit(Header);
	
	// --------------------------- Index -----------------------------
	
	var MainHeader = $(".MainHeader")
	var MainButton = $(".MainButton")
	
	//textFit(MainHeader, {alignVert: true, alignHoriz: true, maxFontSize: 120});
	textFit(MainButton);
	
	var MainAboutMeButton = $("#MainAboutMeButton > .textFitted")
	var MainEducationButton = $("#MainEducationButton > .textFitted")
	var MainExperienceButton = $("#MainExperienceButton > .textFitted")
	var MainPortfolioButton = $("#MainPortfolioButton > .textFitted")
	
	var Size1 = parseInt(MainAboutMeButton.css("font-size"));
	var Size2 = parseInt(MainEducationButton.css("font-size"));
	var Size3 = parseInt(MainExperienceButton.css("font-size"));
	var Size4 = parseInt(MainPortfolioButton.css("font-size"));
	var Size5 = Math.min(Size1, Size2, Size3, Size4);
	
	MainAboutMeButton.css("font-size", Size5);
	MainEducationButton.css("font-size", Size5);
	MainExperienceButton.css("font-size", Size5);
	MainPortfolioButton.css("font-size", Size5);
	
	
	// --------------------------- About me ---------------------------
	
	var Description = $(".Description")
	var ContactInfo = $(".ContactInfo")
	var ContactInfoEntry = $(".ContactInfoEntry")
	
	textFit(Description, {alignVert: true});
	textFit(ContactInfo, {alignVert: true, alignHoriz: true});
	textFit(ContactInfoEntry, {alignVert: true});
	
	// --------------------------- Education ---------------------------

	var SchoolData = $(".SchoolData")
	var IconContainer = $(".SchoolIconContainer")
	var InfoContainer = $(".SchoolInfoContainer")
	var SchoolDataEntry = $(".SchoolDataEntry")
	var SchoolDataDescEntry = $(".SchoolDataDescEntry")

	var height = InfoContainer.innerHeight() - SchoolDataDescEntry.position().top;
	var width = (SchoolData.width() - IconContainer.width());
	var left = IconContainer.width();
	
	
	InfoContainer.width(width);
	InfoContainer.css("left", left);
	
	SchoolDataDescEntry.height(height * 0.94);

	textFit(SchoolDataEntry, {alignVert: true, alignHoriz: true});
	textFit(SchoolDataDescEntry, {alignVert: false, alignHoriz: false});
	
	
	// --------------------------- Portfolio ---------------------------
	
	var MainHeader = $(".SchoolData")
	var PortfolioLabel = $(".PortfolioLabel")
	var ListText = $(".ListText")
	var ProjectData = $(".ProjectData")
	var ProjectName = $(".ProjectName")
	var ProjectDate = $(".ProjectDate")
	var ProjectDescription = $(".ProjectDescription")
	
	var height = ProjectData.innerHeight() - ProjectDescription.position().top;
	
	ProjectDescription.height(height * 0.975);
	
	textFit(PortfolioLabel, {alignVert: true, alignHoriz: true});
	textFit(ListText);
	textFit(ProjectName, {alignVert: true, alignHoriz: true});
	textFit(ProjectDate, {alignVert: true, alignHoriz: true});
	textFit(ProjectDescription, {alignVert: false, alignHoriz: false});
	
	// --------------------------- Experience ---------------------------
	
	var JobData = $(".JobData")
	var JobIconContainer = $(".JobIconContainer")
	var JobIcon = $(".JobIcon")
	var JobInfoContainer = $(".JobInfoContainer")
	var JobCompany = $("#JobCompany")
	var JobDate = $("#JobDate")
	var JobPosition = $("#JobPosition")
	var JobDescription = $("#JobDescription")

	JobIconContainer.height(JobIcon.innerHeight());
	
	var height = JobData.innerHeight() - JobInfoContainer.position().top;
	
	JobInfoContainer.height(height);
	
	height = JobInfoContainer.innerHeight() - JobDescription.position().top;
	
	JobDescription.height(height * 0.975);
	
	textFit(JobCompany);
	textFit(JobDate);
	textFit(JobPosition);
	textFit(JobDescription);
}