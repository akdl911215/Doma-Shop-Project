package univer.ch08;

import java.io.File;

public class ListDirectory1 {
    public static void main(String[] args) {

        // 디렉토리 내용 보여주기

        File file = new File("c:\\windows");
        String files[] = file.list();
        int i = 0;
        while (i < files.length) {
            System.out.println(files[i]);
            i++;
        }
    }
}

/*
addins
AhnInst.log
appcompat
Application Data
apppatch
AppReadiness
assembly
bcastdvr
bfsvc.exe
Boot
bootstat.dat
Branding
CbsTemp
comsetup.log
Containers
Core.xml
Cursors
debug
diagerr.xml
diagnostics
DiagTrack
diagwrn.xml
DigitalLocker
Downloaded Program Files
DtcInstall.log
ELAMBKUP
en-US
explorer.exe
Fonts
GameBarPresenceWriter
Globalization
Help
HelpPane.exe
hh.exe
hjimesv.ini
IdentityCRL
IME
ImmersiveControlPanel
INF
InfusedApps
InputMethod
Installer
ko-KR
L2Schemas
LanguageOverlayCache
LastGood.Tmp
LiveKernelReports
Logs
Media
mib.bin
Microsoft.NET
Migration
ModemLogs
notepad.exe
OCR
Offline Web Pages
Panther
Performance
PFRO.log
PLA
PolicyDefinitions
Prefetch
PrintDialog
Provisioning
regedit.exe
Registration
rescache
Resources
SchCache
schemas
security
ServiceProfiles
ServiceState
servicing
Setup
setupact.log
setuperr.log
ShellComponents
ShellExperiences
SHELLNEW
SKB
SoftwareDistribution
SPD.ico
Speech
Speech_OneCore
splwow64.exe
ssopenfile.exe
System
system.ini
System32
SystemApps
SystemResources
SystemTemp
SysWOW64
TAPI
Tasks
Temp
TextInput
tracing
twain_32
twain_32.dll
UpdateAssistant
Vss
WaaS
Web
win.ini
WindowsShell.Manifest
WindowsUpdate.log
winhlp32.exe
WinSxS
WMSysPr9.prx
write.exe
* */