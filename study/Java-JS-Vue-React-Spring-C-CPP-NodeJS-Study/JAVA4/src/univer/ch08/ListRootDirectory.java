package univer.ch08;

import java.io.File;

public class ListRootDirectory {
    public static void main(String[] args) {
        File root_files[] = File.listRoots();
        int i = 0;
        File dir_files[];
        while (i < root_files.length) {
            System.out.println(root_files[i].getPath());
            dir_files = root_files[i].listFiles();
            int j = 0;
            if (dir_files == null) {
                System.out.println("\t*EMPTY*");
            }
            else {
                while(j < dir_files.length) {
                    if (dir_files[j].isDirectory()){
                        System.out.print("\t" + "[");
                        System.out.println(dir_files[j].getName()+ "]");
                    }
                    else
                        System.out.println("\t" + dir_files[j].getName());
                    j++;
                }
            }
            i++;

        }
    }
}

/*
C:\
	[$Recycle.Bin]
	[$WinREAgent]
	$WINRE_BACKUP_PARTITION.MARKER
	[a]
	agentlog.txt
	bootTel.dat
	[Documents and Settings]
	DumpStack.log.tmp
	hiberfil.sys
	[Intel]
	[MSOCache]
	[OneDriveTemp]
	pagefile.sys
	[PerfLogs]
	[Program Files]
	[Program Files (x86)]
	[ProgramData]
	rc4.log
	[Recovery]
	swapfile.sys
	[System Volume Information]
	[Temp]
	[Users]
	[Windows]
D:\
	[$Recycle.Bin]
	[project]
	[System Volume Information]
*/