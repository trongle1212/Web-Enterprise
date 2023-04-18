using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Common.Enum
{
    public class EnumCommon
    {
        public enum EGender
        {
            [Description("Male")]
            Male = 1,
            [Description("FeMale")]
            FeMale = 2,
        }

        public enum ERole
        {
            [Description("Admin")]
            Admin = 1,
            [Description("Supervisor")]
            Supervisor = 10,
            [Description("QA")]
            QA = 20,
            [Description("Student")]
            Student = 30,
            [Description("Lecturer")]
            Lecturer = 40,
        }


        public enum IdeaStatus
        {
            [Description("Not Using")]
            NotUsing = 1,
            [Description("Using")]
            Using = 2
        }
    }
}
